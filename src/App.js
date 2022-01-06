import React from 'react';
//  { useState, useEffect }
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle.js";
import Hero from './Components/Hero/indexH.js';
import Products from "./Components/Products/indexp2.js";
import Feature from "./Components/Feature/indexF.js";
// import SearchBox from "./Components/Items/Search.js";
// import FeatureAcha from "./Components/FeatureAccha/indexF.js";
// import FeatureAyam from "./Components/FeatureAyam/indexF.js";
import Footer from "./Components/Footer/indexfooter.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// const App = () => {
//   const[searchValue, setSearchValue] = useState('');

//   const getMakananRequest = async(searchValue) => {
//     const url = 'http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1'
//     const response = await fetch(url);
//     const responseJson = await response.json();

//     if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}

//   };

//   useEffect(() => {
// 		getMakananRequest(searchValue);
// 	}, [searchValue]);
// }
function App() {
  return (
    
    <Router> 
      <GlobalStyle />        
      <Hero />
      <Products heading='Choose your favorite' />
      <Feature />
      {/* <Products heading='Get your favorite Pizza'/>
      <FeatureAcha/>
      <Products heading='Enak dan Harganya Terjangkau'/>
      <FeatureAyam/>
      <Products heading='Enak dan Harganya Terjangkau'/> */}
      <Footer />
    </Router>
    
  );  
}

export default App;

 