import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./signup.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="background">
      <div className="form-content-center">
        <form className="form" onSubmit={handleSubmit}>
          <h1> SIGN UP USING PHONE NUMBER</h1>
          <div className="form-inputs">
            <label htmlFor="email" className="from-label">
              <b>Email :</b>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="string" className="from-label">
              <b>Phone Number :</b>
            </label>

            <input
              id="phonenumber"
              type="string"
              name="phonenumber"
              className="form-input"
              placeholder="Enter Your Phone Number"
              value={values.phonenumber}
              onChange={handleChange}
            />
            {errors.phonenumber && <p>{errors.phonenumber}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="from-label">
              <b>Password:</b>
            </label>

            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            <b> Sign Up</b>
          </button>
          <span className="form-input-login">
            already have an account ? Login
            <a href="/"> here </a>
          </span>
          
            
        </form>
        <p className="form-input-policies">
              <b>
              By creating an account, you agree to Khanaval's Term of Service,
              Privacy Policy and Content Policies
              </b>
          </p>
      </div>
    </div>
  );
};

export default SignUp;
