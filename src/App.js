import React from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import PrivateRoute from './ProtectedRoutes';
import Hero from './Components/Hero/indexH.js';
import Products from "./Components/Products/indexRestaurant.js";
import Feature from "./Components/Feature/indexF.js";
import Footer from "./Components/Footer/indexfooter.js";
import TopHeader from "./Components/TopHeader/TopHeader";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mysass/App.css';
import './mysass/App-media.css';

function App() {
  return (
    <div className='App'>
      <Routes> 
        
        {/* <GlobalStyle/>  */}
{/*         
        <Route exact path="/">
            <TopHeader />
            <HomeBanner/>
            <Products heading='restaurant' />   
            <Feature />
            <Footer />
        </Route> */}

        <Route  path="/" element={<PrivateRoute />}/>
        <Route  path="/home" element={<Home />}/>
        <Route  exact path="/login" element={<Login />} />

              
      </Routes>
    </div>
  );  
}

export default App;