import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductContainer from "./ProductContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./items.css";
import {
  ProductsContainer,
  // ProductWrapper,
  ProductsHeading,
} from "./ProductsElements";
import { Card, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

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
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <ProductsContainer>
      <ProductsHeading className="heading"> {heading} </ProductsHeading>
      {/* <ProductWrapper>    */}
      <Slider {...settings}>
        {data.map((payload) => {
          return payload.shop.map((shop) => {
            return shop.Menus.map((menu) => (
              <React.Fragment>
                {/* <Col> */}
                <div class="shadow p-3 mb-5 bg-white rounded">
                <Card style={{ width: "18rem" }} key={menu.code}>
                  <Card.Img variant="top" src={menu.image} />
                  <Card.Body>
                    <Card.Title className="card-title"><b>{menu.title}</b></Card.Title>
                    <Card.Text className="text"> {menu.ind} </Card.Text>
                    <Card.Title className="titcen">
                      <b> Rp. {menu.price} </b>
                    </Card.Title>
                  </Card.Body>
                </Card>
                </div>
                {/* <Card  >
                      <Card.Body>
                        <ProductContainer
                          key={menu.code}
                          img={menu.image}
                          title={menu.title}
                          desc={menu.ind}
                          price={menu.price}
                        />
                        </Card.Body>
                     </Card> */}
                {/* </Col> */}
              </React.Fragment>
            ));
          });
        })}
      </Slider>
    </ProductsContainer>
  );
};

export default Products;
