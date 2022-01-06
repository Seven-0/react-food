// import axios from "axios";
// import React, { useState, useEffect } from "react";
// // import ProductContainer from "./ProductContainer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "./items.css";

// import { Card, Col, Container } from "react-bootstrap";

// const Products = ({ heading }) => {
//   const [data, setShops] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1"
//       )
//       .then(async (Response) => {
//         console.log("Respone:", Response.data.payload);
//         setShops(Response.data.payload);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 400,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//   };

//   return (
//     <Container>
//       <div className="clearfix">
//         <h1> Get Your Favorite Food </h1>
//       </div>
//       <Slider {...settings} className="myWrapper">
//         {data.map((payload) => {
//           return payload.shop.map((shop) => {
//             return shop.Menus.map((menu) => (
//               <React.Fragment>
//                 <Col>
//                   <Card key={menu.code}>
//                       <Card.Img
//                       variant ="top" src={menu.image} />
//                     <Card.Body>
//                     {menu.shopName}
//                     {menu.ind}
//                     {"Rp. " + menu.price}

//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </React.Fragment>
//             ));
//           });
//         })}
//       </Slider>
//     </Container>
//   );
// };

// export default Products;
