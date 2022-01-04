import React from "react";
import { useState, useEffect } from "react";
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

// Product Pizza
const Products = ({ heading }) => {
  const [payload, setMakanans] = useState([]);
  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const response = await fetch("http://localhost:8090/shop");
    const data = await response.json();
    setMakanans(data);
  };

  return (
    <ProductsContainer>
      <ProductsHeading> {heading} </ProductsHeading>
      <ProductWrapper>
        {payload.map((makanan, code) => {
          return makanan.acchaIndian.map((acchaIndian, code) => {
            return (
              <ProductCard key={acchaIndian.code}>
                <ProductImg src={acchaIndian.image} />
                {console.log("lognya: ", acchaIndian.shopName)}
                <ProductInfo>
                  <ProductTitle> {acchaIndian.shopName} </ProductTitle>
                  <ProductDesc> {acchaIndian.ind} </ProductDesc>
                  <ProductPrice> {"Rp. " + acchaIndian.price} </ProductPrice>
                  {/* <ProductButton>{makanan.button} </ProductButton> */}
                </ProductInfo>
              </ProductCard>
            );
          });
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
