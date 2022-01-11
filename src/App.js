import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './mysass/SignUpCSS/signup2.css';
import Footer from "./Components/Footer/indexfooter.js";
import { GlobalStyle } from "./GlobalStyle.js";
import TopHeader from "./Components/TopHeader/TopHeader";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/indexP.js";
import Feature from "./Components/Feature/indexF.js";
import SignUp from "./Components/FormSignUp/signup.js";
// import SignUp from "./Components/SignUp/SignUp.js";
// import Hero from './Components/Hero/indexH.js';

function Apps() {
  return (
    <div className='App'>
    <Router>       
      <GlobalStyle/> 
      <TopHeader />
       <Switch>
        {/* <Route path="/" exact component={HeroBanner} /> */}
         <Route path="/login" component={Login} />
      </Switch> 
      
      <Switch>
        {/* <Route path="/" exact component={HeroBanner} /> */}
        <Route path="/signup" component={SignUp} />
      </Switch>

      <Route exact path="/">
        <Home/>
        <Products heading='restaurant' />   
        <Feature />           
        {/* <Hero />*/}
      </Route>
      <Footer />
      
      
            
    </Router>
    </div>

  );
}

export default Apps;
/* <Routes>
          <Route path="/" element={<GlobalStyle />} />
          <Route path="/" element={<TopHeader />} /> 
           <Route path="/" exact component={HeroBanner} /> 
          <Route path="/login" component={Login} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products heading="restaurant" />} />
          <Route path="/" element={<Feature />} />
          <Route path="/" element={<Footer />} />
        </Routes> */
        