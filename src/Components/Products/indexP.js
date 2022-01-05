import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductContainer from "./ProductContainer";

// import { Row, Card, Col } from "react-bootstrap";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  // ProductTitle,
  // ProductCard,
  // ProductImg,
  // ProductInfo,
  // ProductDesc,
  // ProductPrice,
  // ProductButton,
} from "./ProductsElements";

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

  return (
    <div>
      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {data.map((payload) => {          
            return (
              payload.shop.map((shop) =>{
                return(
                  shop.Menus.map(menu => (
                    <ProductContainer
                    key={menu.code.toString()}
                    img={menu.image}
                    title={menu.title}
                    desc={menu.ind}
                    price={menu.price} 
                    />

                  )
                ));

              }));
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;
