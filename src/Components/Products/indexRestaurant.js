import axios from "axios";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./items.css";
import { ProductsContainer, ProductsHeading } from "./ProductsElements";
import Card from "react-bootstrap/Card";

const Products = ({ heading }) => {
  const [data, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1"        
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
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
  };

  return (
    <ProductsContainer>
      <ProductsHeading className="heading">
        <h1> {heading} </h1>
      </ProductsHeading>
      <Slider {...settings}>
        {data.map((payload) => {
          return payload.shop.map((shop) => (
            <React.Fragment>
              <Card key={shop.code} className="cardWrapper">
                <Card.Img variant="top" src={shop.image} />
                <Card.Body>
                  <Card.Title>
                    <b>
                      <a href="/" className="a">
                        {shop.shopName}{" "}
                      </a>
                    </b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </React.Fragment>
          ));
        })}
      </Slider>
      <hr1 className="lines" />
    </ProductsContainer>
  );
};

export default Products;
