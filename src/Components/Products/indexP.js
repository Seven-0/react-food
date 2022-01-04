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
        {payload.map((makanan) => {
          return (
            <div>
              {makanan.menus.map(menu => (
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
        ;
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
