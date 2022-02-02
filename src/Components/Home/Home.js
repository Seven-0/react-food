import React, { useState, useEffect } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Footer from "../Footer/indexfooter";

const Home = () => {

    return (
       <>
       <HomeBanner></HomeBanner>
       <section className='section landing-page'>
        <div className='container'>
          <div className='text-wrapper'>
            <p>Welcome Home</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
      </>
    )
};

export default Home;