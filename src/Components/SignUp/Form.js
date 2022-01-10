import React, { useState } from "react";
import SignUp from "./SignUp.js";
import "./signup.css";
import SignUpSuccess from "./SignUpSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"> </span>
        <div className="form-content-left">
          <img className="form-img" alt="spaceship" />
        </div>
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <SignUpSuccess />}
      </div>
    </>
  );
};

export default Form;
