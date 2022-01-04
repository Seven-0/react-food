 import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle.js";
import Hero from './Components/Hero/indexH.js';
import Products from "./Components/Products/indexP.js";
import Feature from "./Components/Feature/indexF.js";
import FeatureAcha from "./Components/FeatureAccha/indexF.js";
import FeatureAyam from "./Components/FeatureAyam/indexF.js";

import Footer from "./Components/Footer/indexfooter.js";

function App() {
  return (
    
    <Router> 
      <GlobalStyle />        
      <Hero />
      <Products heading='Choose your favorite' />
      <Feature />
      <Products heading='Get your favorite Pizza'/>
      <FeatureAcha/>
      <Products heading='Enak dan Harganya Terjangkau'/>
      <FeatureAyam/>
      <Products heading='Enak dan Harganya Terjangkau'/>
      <Footer />
    </Router>
    
  );  
}

export default App;

 