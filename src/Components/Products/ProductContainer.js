import React from "react";
import {    
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
     } from "./ProductsElements";

const ProductContainer = (props) => {
  return (
    <ProductCard>
      <ProductImg src={props.img} />
      {/* {console.log("lognya: ", menu.image)} */}
      <ProductInfo>
        <ProductTitle> {props.title} </ProductTitle>
        <ProductDesc> {props.desc} </ProductDesc>
        <ProductPrice> {"Rp. " + props.price} </ProductPrice>
        {/* <ProductButton>{makanan.button} </ProductButton> */}
      </ProductInfo>
    </ProductCard>
  );
};
export default ProductContainer;
