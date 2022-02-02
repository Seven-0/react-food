import React, { useState, useEffect  } from "react";
import axiosIntrceptor from "../../utils/interceptors";
import { setHomepageBanner } from   "../../store/actionHomeBanner";
import { useSelector, useDispatch } from "react-redux";
import HomeBannerComponent from "./HomeBannerComponent";

const HomeBanner = () => {

  const payload = useSelector((state) => state.reducerHomepageBanner);

  const dispatch = useDispatch();

  const fetchHomeBanner = async () => {
      axiosIntrceptor
      .get( "http://midas-be-task.herokuapp.com/midas/config/v1/foodDelivery/dataContent?version=1" )
      .then((response) => {
          console.log("Response:", response.data);
          dispatch(setHomepageBanner(response.data));
      })
      .catch((error) => {
          console.log(error);
      },[]);  
  };

  useEffect(() => {
      fetchHomeBanner();
  }, []);
    
  // console.log("Data :", payload);

      
  return (
    <div className="section landing-page">
      <div className="container">
          <HomeBannerComponent></HomeBannerComponent>
      </div>
    </div>
  );
};
  

export default HomeBanner;