import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import Hero from './Components/Hero/indexH.js';
import Products from "./Components/Products/indexRestaurant.js";
import Feature from "./Components/Feature/indexF.js";
import Footer from "./Components/Footer/indexfooter.js";
import TopHeader from "./Components/TopHeader/TopHeader";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mysass/App.css';

function App() {
  return (
    <div className='App'>
    <Router> 
      
      <GlobalStyle/> 
      <Route exact path="/">
          <TopHeader />
      </Route>
      
      <Switch>
        {/* <Route path="/" exact component={HeroBanner} /> */}
        <Route path="/login" component={Login} />
      </Switch>

      <Route exact path="/">
        <Home/>
        <Products heading='restaurant' />   
        <Feature />   
        
        {/* <Hero /> */}
        
      </Route>
      
      
      <Footer />
            
    </Router>
    </div>

  );  
}

// const HeroBanner = () => (
//   <section className='section section-banner'>
//     <div className='container'>
//       <div className='text-wrapper'> 
//         <h1 className='hero-text'>khanaval <br/> delicious</h1>
//         <p className='hero-text-desc'>home food</p>
//       </div>
//     </div>
//   </section>
// );

export default App;