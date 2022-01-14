import axios from "axios";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./items.css";
// import {
//   ProductsContainer,
//   ProductsHeading,
// } from "./ProductsElements";
import Card from 'react-bootstrap/Card'
// import CardHeader from "react-bootstrap/esm/CardHeader";

const Products = ({ heading }) => {
  const [data, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1"
      )
      .then(async (Response) => {
        console.log("Respone:", Response.data.payload);
        setShops(Response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    // <ProductsContainer>
    //   <ProductsHeading className="heading"> {heading} </ProductsHeading>
      // <Slider {...settings} className="myWrapper">
      //   {data.map((payload) => {
      //     return payload.shop.map((shop) => (
      //         <React.Fragment>         
      //           <Card key={shop.code} className="cardWrapper">
      //             <Card.Body className="cardBody">
      //               <Card.Img className="cardImg" variant="top" src={shop.image} />
      //               <Card.Title className="titcen">{shop.shopName}</Card.Title>
      //             </Card.Body>
      //           </Card>
      //         </React.Fragment>
      //       ));
      //   })}
      // </Slider>
    // </ProductsContainer>

    <section className='section section-produk'>
        <div className='container'>
            <div className='text-wrapper'>
                <h2 className='hero-text'> {heading} </h2>
                
                <Slider {...settings} className="myWrapper">
                  {data.map((payload) => {
                    return payload.shop.map((shop) => (
                        <React.Fragment>         
                          <Card key={shop.code} className="cardWrapper">
                            <Card.Body className="cardBody">
                              <Card.Img className="cardImg" variant="top" src={shop.image} />
                              <Card.Title className="titcen">{shop.shopName}</Card.Title>
                            </Card.Body>
                          </Card>
                        </React.Fragment>
                      ));
                  })}
                </Slider>

              
            </div>
        </div>
    </section>


  );
};

export default Products;