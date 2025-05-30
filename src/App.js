import React, { useEffect } from 'react';
import { auth } from './firebase'; // Import auth from your Firebase configuration
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      }));
    } else {
      // User is logged out
      dispatch(logout())
    }
  });

  return unsubscribe;
}, [dispatch]);

  return (
    <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ): (
        <Switch>
          <Route path = '/profile'>
            <ProfileScreen />
          </Route>

          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      )}
    </Router>
    </div>
  );
}

export default App;
