import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Trending Movies" fetchURL={requests. fetchTrending}/>


      <Row title="NetflixOriginals" fetchURL={requests. fetchNetflixOriginals}/>


         <Row title="Top Rated Movies" fetchURL={requests. fetchTopRated}/>

         <Row title="Action Movies" fetchURL={requests. fetchActionMovies}/>

         <Row title="Comedy Movies" fetchURL={requests. fetchComedyMovies}/>

         <Row title="Horror Movies" fetchURL={requests. fetchHorrorMovies}/>

         <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>

         <Row title="Documentries" fetchURL={requests.fetchDocumentaries}/>

         

      
    </div>
  );
}

export default App;
