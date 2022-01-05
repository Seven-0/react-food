import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Row, Card, Col } from "react-bootstrap";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  // ProductButton,
} from "./ProductsElements";

const Products = ({heading}) => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1"
      )
      .then(async (Response) => {
        console.log("Respone:", Response.data.payload);

        setShops(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const Products = ({heading}) => {
  //   const [shops, setMakanans] = useState([]);
  //   useEffect(() => {
  //     fectData();
  //   }, []);

  //   const fectData = async () => {
  //     const url =
  //       "http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setMakanans(data);
  //     this.setMakanans({});
  //     console.log(data);
  //   };
 

  return (
    <div>
      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {shops.map((makanan) => {
            // .filter((makanan) => makanan.code === makanan)
            return (
              <div>
                {makanan.menus.map((menu) => (
                  <ProductCard key={menu.code}>
                    <ProductImg src={menu.image} />
                    {console.log("lognya: ", menu.shopName)}
                    <ProductInfo>
                      <ProductTitle> {menu.shopName} </ProductTitle>
                      <ProductDesc> {menu.ind} </ProductDesc>
                      <ProductPrice> {"Rp. " + menu.price} </ProductPrice>
                      {/* <ProductButton>{makanan.button} </ProductButton> */}
                    </ProductInfo>
                  </ProductCard>
                ))}
              </div>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
}

export default Products;
