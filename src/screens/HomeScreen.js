 import React from 'react';
 import Banner from '../Banner';
 import './HomeScreen.css';
 import Nav from '../Nav.js';
 import requests from '../Requests';
 import Row from '../Row';


 function HomeScreen() {
   return (
     <div className='HomeScreen'>
        
        <Nav />
        
        <Banner />

        <Row title='NETFLIX ORIGINALS' 
             fetchUrl={requests.fetchNetflixOriginals} 
            //  isLargeRow
        />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

     </div>
   )
 }
 
 export default HomeScreen;