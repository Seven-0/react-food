import axios from "axios";
import React, { useState, useEffect } from "react";
// import ProductContainer from "./ProductContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./items.css";
// import NumberFormat from 'react-number-format';
import {
  ProductsContainer,
  // ProductWrapper,
  ProductsHeading,
} from "./ProductsElements";
import { Card } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";

const Product = ({ heading }) => {
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
    slidesToScroll: 4,
    arrows: false,
  };

  return (
    <ProductsContainer>
      <ProductsHeading className="heading"> {heading} </ProductsHeading>
      <Slider {...settings}>
        {data.map((payload) => {
          return payload.shop.map((shop) => {
            return shop.Menus.map((menu) => (
              <React.Fragment>
                <Card key={menu.code} className="cardWrapper2">
                  <Card.Img vari7ant="top" src={menu.image} className="card-img-bottom"/>
                  <Card.Body>
                    <Card.Title className="title">
                      <h5>  
                      <b>{menu.title}</b>
                      </h5>
                    </Card.Title>
                    <Card.Text className="title"> 
                    <h6> {menu.ind} </h6> </Card.Text>
                    <Card.Title className="title">
                    {/* <NumberFormat thousandSeparator={true} prefix={'Rp. '} value={menu.price} /> */}
                      <b> Rp. {menu.price} </b>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ));
          });
        })}
      </Slider>
    </ProductsContainer>
  );
};

export default Product;
