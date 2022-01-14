import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  const Data = {
    email: "",
    phonenumber: "",
    password: "",
  };

  const [dataUser, setDataUser] = useState(Data);
  const [error, setError] = useState({});
  
  const validasi = (fieldValue = dataUser) => {
    let temp = { ...error };

    // Validation Email
    if ("email" in fieldValue) {      
      temp.email =
        fieldValue.email === ""
          ? "Email is required"
          : "" || !/\S+@\S+\.\S+/.test(fieldValue.email)
          ? "Invalid Email "
          : "";
      console.log("Temporary Email :", fieldValue.email);    }
    // Validation Phone Number
    const phonenumberRegex = /([0])/;
    if ("phonenumber" in fieldValue) {
      temp.phonenumber =
        fieldValue.phonenumber === ""
          ? "Phone Number is required"
          : "" || !phonenumberRegex.test(fieldValue.phonenumber)
          ? "Invalid Phone Number "
          : "" || fieldValue.phonenumber.length < 6
          ? "Invalid Phone Number character length"
          : "";    }
    // Validation Password
    const passwordNumberRegex = /(?=.*[0-9])/;
    const passwordUppercaseRegex = /([a-z].[A-Z])|([A-Z].[a-z])/;
    if ("password" in fieldValue) {
      temp.password =
        fieldValue.password === ""
          ? "Password is required"
          : "" || !passwordNumberRegex.test(fieldValue.password)
          ? "Password must be have Number Characters "
          : "" || fieldValue.password.length < 8
          ? "Password must be 8 characters long"
          : "" || !passwordUppercaseRegex.test(fieldValue.password)
          ? " Password must be have Uppercase Characters"
          : "";
      console.log("my password:", fieldValue.password);
    }
    console.log("message:", temp);
    setError({
      ...temp,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
    validasi({ [name]: value });
    console.log("error", error);
  };

  function handleSubmit(e) {
    e.preventDefault();
    validasi();

    // useEffect(data => {
    //   // POST request using axios inside useEffect React hook
    //   const headers = {
    //     "Conten-Type": "application/json",
    //     Signature: "midasfooddelivery",
    //   };
    //   const url = "https://midas-food-delivery-users.herokuapp.com/v1/signup";
    //   axios
    //     .post(url, { headers })
    //     .then(async (response) => {
    //       console.log("Respone:", response.data.payload);
    //       Data(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []);
  

    console.log("Login Submitted:", dataUser.validasi);
  }

  return (
    <section className="section landing-page landing-form page-login">
      <div className="screen-wrapper row">
        <div className="col-lg-8 col-md-7 col-xs-12 col col-img">
          <div className="background-image img-fluid"></div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col col-form">
          <h1 className="hero-text">
            Sign <br /> Up for Khanaval Food
          </h1>
          <div className="box-wrapper">
            <form className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={dataUser.email}
                  onBlur={handleChange}
                  onChange={handleChange}
                />
                <div className="input-feedback"> {error["email"]} </div>
              </div>
              <div className="form-group">
                <input
                  name="phonenumber"
                  placeholder="Enter Your Phone Number"
                  value={dataUser.phonenumber}
                  minLength="6"
                  onBlur={handleChange}
                  onChange={handleChange}
                />
                <div className="input-feedback"> {error["phonenumber"]} </div>
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  value={dataUser.password}
                  maxLength="8"
                  onBlur={handleChange}
                  onChange={handleChange}
                />
                <div className="input-feedback"> {error["password"]} </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="button btn-blue"
                >
                  sign up
                </button>
              </div>
            </form>

            <span className="form-input-login">
              already have an account ? Login
              <a href="/login"> here </a>
            </span>

            <div className="disclaimer"></div>
            <p>
              By creating an account, you agree to Khanaval's Term of Service,
              Privacy Policy and Content Policies
            </p>

            <div className="social-container">
              <a href="/signup" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/signup" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/signup" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/signup" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
