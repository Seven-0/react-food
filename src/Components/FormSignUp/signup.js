import React, { useState } from "react";
import "../../mysass/SignUpCSS/signup2.css";
// import * as EmailValidator from "email-validator";
// import "../../mysass/App.css"

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

    if ("email" in fieldValue) {
      // temp.email = !/\S+@\S+\.\S+/.test(fieldValue.email) && fieldValue.email.length >= 1 ? "Invalid Email " : ""
      // || fieldValue.email === "" ? "Email is required" : "";
      temp.email =
        fieldValue.email === ""
          ? "Email is required"
          : "" || !/\S+@\S+\.\S+/.test(fieldValue.email)
          ? "Invalid Email "
          : "";
      console.log("Temporary Email :", temp.email);
    }
    const phonenumberRegex = /([0])/;
    if ("phonenumber" in fieldValue) {
      temp.phonenumber =
        fieldValue.phonenumber === ""
          ? "Phone Number is required"
          : "" || !phonenumberRegex.test(fieldValue.phonenumber)
          ? "Invalid Phone Number "
          : "" || fieldValue.phonenumber.length < 7
          ? "Phone Number must be 7 characters long"
          : "";
    }
    const passwordNumberRegex = /(?=.*[0-9])/;
    const passwordUppercaseRegex = /([a-z].[A-Z])|([A-Z].[a-z])/;
    // const passwordMaxLengthRegex = /({1,8})/;
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
    }
    console.log(temp);
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // const signup = {dataUser};
    await fetch("http://localhost:5050/values", {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setError(validasi(Data));
    setIsSubmitting(true);

    console.log("add Data ", Data);
  };
  
  return (
    <section className="section landing-page landing-form page-login">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="hero-text">Sign Up Using Phone Number</h1>                  
          <div className="box-wrappers">
            <form className="forms" onSubmit={handleSubmit}>
              {/* <label> Email: </label> */}
              <input
                name="email"
                value={dataUser.email}
                placeholder="Enter Your Email"
                onBlur={handleChange}
                onChange={handleChange}
                // className={errors.email && "error"}
              />
               {/* {errors.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )} */}

              <span className="spans"> {error["email"]} </span> <br />
              {/* <label> Phone Number: </label> */}
              <input
                name="phonenumber"
                value={dataUser.phonenumber}
                placeholder="Enter Your Phone Number"
                onBlur={handleChange}
                onChange={handleChange}
              />
              <span className="spans"> {error["phonenumber"]} </span> <br />
              {/* <label> Password: </label> */}
              <input
                name="password"
                value={dataUser.password}
                placeholder="Enter Your Password"
                maxLength={8}
                onBlur={handleChange}
                onChange={handleChange}
              />
              <span className="spans"> {error["password"]} </span> <br />
              <div className="form-group">
                <button
                  type="submit"  
                  disabled={isSubmitting}               
                  className="buttons btn-blues" >
                  sign up
                </button>
              </div>
              {/* <div className="button-wrapper cta-signup">                  
                  <a href="/success" className="button btn-border-blue">sign up</a>  
                </div>  */}
              <span className="form-input-login">
                already have an account ? Login
                <a href="/login"> here </a>
              </span>
              <p className="form-input-policies">
              <b>
              By creating an account, you agree to Khanaval's Term of Service,
              Privacy Policy and Content Policies
              </b>
          </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
