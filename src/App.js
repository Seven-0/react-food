import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle.js";
import Hero from './Components/Hero/indexH.js';
import Products from "./Components/Products/indexRestaurant.js";
import Feature from "./Components/Feature/indexF.js";
import Footer from "./Components/Footer/indexfooter.js";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <Router> 
      <GlobalStyle />        
      <Hero />
      <Products heading="Restaurants's" /> 
      <Products heading="Restaurants's" />             
      <Feature />
      <Footer />
    </Router>
    
  );  
}

export default App;

 