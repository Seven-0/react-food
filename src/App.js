import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "./GlobalStyle.js";
// import Hero from './Components/Hero/indexH.js';
// import Products from "./Components/Products/indexRestaurant.js";
// import Product from "./Components/Products/indexp2.js";
// import Feature from "./Components/Feature/indexF.js";
// import Footer from "./Components/Footer/indexfooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp/SignUp.js";
import SignUpSuccess from "./Components/SignUp/SignUpSuccess.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<SignUpSuccess />} />
        </Routes>        
        {/* <GlobalStyle /> */}
        {/* <Hero /> */}
        {/* <Products heading="Restaurants's" /> 
            <Product heading="Menu's" />  */}
        {/* <Feature />
      <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
