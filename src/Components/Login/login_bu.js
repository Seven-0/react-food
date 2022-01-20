
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

import React, { useState } from "react";
import axiosIntrceptor from "../../utils/interceptors.js";

import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  SocialIconLink,
  SocialIcons,
} from '../Footer/FooterElements.js';


// const Login = () => (
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Logging in", values);
//         setSubmitting(false);
//       }, 500);
//     }}

//     //********Handling validation messages yourself*******/
//     validate={values => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (!EmailValidator.validate(values.email)) {
//         errors.email = "Invalid email address";
//       }

//       const passwordRegex = /(?=.*[0-9])/;
//       if (!values.password) {
//         errors.password = "Required";
//       } else if (values.password.length < 8) {
//         errors.password = "Password must be 8 characters long.";
//       } else if (!passwordRegex.test(values.password)) {
//         errors.password = "Invalid password. Must contain one number";
//       }

//       return errors;
//     }}

//     //********Using Yum for validation********/
//     // validationSchema={Yup.object().shape({
//     //   email: Yup.string()
//     //     .email()
//     //     .required("Required"),
//     //   password: Yup.string()
//     //     .required("No password provided.")
//     //     .min(8, "Password is too short - should be 8 chars minimum.")
//     //     .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     // })}

//   >
//     {props => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//       } = props;
//       return (
        
//         // template form
//         <section className='section landing-page landing-form page-login'>
//           <div className='container'>
//             <div className='text-wrapper'>
//               <h1 className='hero-text'> login with your exsiting khanaval account </h1>
//               <div className="box-wrapper">
//                 <form onSubmit={handleSubmit} className="form">
//                   {/* <label htmlFor="email">Email</label> */}
//                   <div className="form-group">
//                     <input
//                       name="email"
//                       type="text"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={errors.email && touched.email && "error"}
//                     />
//                     {errors.email && touched.email && (
//                       <div className="input-feedback">{errors.email}</div>
//                     )}
//                   </div>
//                   <div className="form-group">
//                     {/* <label htmlFor="email">Password</label> */}
//                     <input
//                       name="password"
//                       type="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={errors.password && touched.password  && "error"}
//                     />
//                     {errors.password && touched.password && (
//                       <div className="input-feedback">{errors.password}</div>
//                     )}
//                   </div>
//                   <div className="form-group">
//                     <button type="submit" disabled={isSubmitting} className="button btn-blue"> Log in </button>
//                   </div>
//                 </form>

//                 <div className="button-wrapper cta-forget-password">
//                   <a href="/" className="link">forget password?</a>
//                 </div>

//                 <div className="button-wrapper cta-signup">
//                   <a href="#" className="button btn-border-blue">sign up</a>  
//                 </div>
//               </div>

//               <div className="disclaimer">
//                 <p>By Logging in you are agree to khanaval's Terms of Service, Privacy Policy and Content Policies</p>        
//               </div>

//             </div>
//           </div>
//         </section>

//       );
//     }}
//   </Formik>
// );

// export default Login;

function Login() {
  const Data={
    email:"",
    password:"",
  }

  const[dataUser, setDataUser] = useState(Data)
  const [error, setError] = useState({})

  const secretKey ="midasFoodDelivery";

  const encryption = () => {
    const password = dataUser.password
    let chipherEncryptedText = CryptoAES.encrypt(password,secretKey);
    let chipherDecryptedText = CryptoAES.decrypt(chipherEncryptedText.toString(), secretKey);

    console.log("chipherEncryptedText : ", chipherEncryptedText.toString());
    console.log("chipherDecryptedText : ", chipherDecryptedText.toString(CryptoENC));
  }

  const validasi = (fieldValue = dataUser) => {
    let temp = {...error}

    if("email" in fieldValue ){
      const emailRegex = /\S+@\S+\.\S+/;

      temp.email = fieldValue.email === "" ? "Email is required" : "" || 
      !emailRegex.test(fieldValue.email) ? "Invalid email address" : "";
    }

    if("password" in fieldValue ){
      const passwordNumberRegex = /(?=.*[0-9])/;
      const passwordUppercaseRegex = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
      
      temp.password = fieldValue.password ==="" ? "Password is required" : "" ;
      // fieldValue.password.length < 8 ? "Password must be 8 characters long" : "" ||
      // !passwordUppercaseRegex.test(fieldValue.password) ? "Password must contain a upperacase" : "" ||
      // !passwordNumberRegex.test(fieldValue.password) ? "Password must contain a number" : "";
    }
    
    console.log("message:", temp);
    setError({
      ...temp
    })
  }

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setDataUser({
      ...dataUser,
      [name] : value
    })
    validasi({[name]:value})
    console.log("errorx", error);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validasi();

    encryption();

    axiosIntrceptor
      .post(
        "https://midas-food-delivery-users.herokuapp.com/v1/login", 
        dataUser
      )
      .then((response) => {
        console.log("Response:", response.data.payload);
        setDataUser(response.data.payload[0]);
      })
      .catch((error) => {
        console.log(error);
    },[]);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // validasi();
  //   // console.log('Login Submitted');

  //   axios({
  //     method: 'post',
  //     url: 'https://midas-food-delivery-users.herokuapp.com/v1/login',
  //     data: 
  //       dataUser,
  //     headers: {
  //       "signature": "midasfooddelivery",
  //       "request_not_encrypted": "true"
  //     },
  //   }).then(function(response) {
  //       console.log("Responsenya apa:", response.data.payload[0]);
  //       setDataUser(response.data.payload[0]);
  //     }).catch(function(error) {
  //       console.log("errorx", error);
  //   });
  // }

  return(
    <section className="section landing-page landing-form page-login">
      <div className="screen-wrapper row">
          <div className="col-lg-8 col-md-7 col-xs-12 col col-img">
            <div className="background-image img-fluid"></div>
          </div>
          <div className="col-lg-4 col-md-12 col-xs-12 col col-form">
            <h1 className='hero-text'> login <br/> for khanaval food </h1>
            <div className="box-wrapper">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                      type="text"
                      name="email" 
                      placeholder="Email"
                      value={dataUser.email}
                      onBlur={handleChange}
                      onChange={handleChange}
                  />
                  <div className="input-feedback">{error["email"]}</div>
                </div>
                <div className="form-group">
                  <input
                      name="password" 
                      type="password"
                      placeholder="Password"
                      value={dataUser.password}
                      // maxLength="8"
                      onBlur={handleChange}
                      onChange={handleChange}
                  />
                  <div className="input-feedback">{error["password"]}</div>
                </div>
                <div className="form-group">
                    <button type="submit" className="button btn-blue" disabled={dataUser.email.length<1 || dataUser.password.length<1}> Log in </button>
                </div>
              </form>

              <div className="button-wrapper cta-forget-password">
               <a href="/" className="link">forget password?</a>
              </div>
              <div className="button-wrapper cta-signup">
               <a href="#" className="button btn-border-blue">sign up</a>  
              </div>
            </div>

            <div className="disclaimer">
             <p>By Logging in you are agree to khanaval's Terms of Service, Privacy Policy and Content Policies</p>        
            </div>

            <SocialIcons className='footer-social-media'>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                  <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                  <FaYoutube />
              </SocialIconLink>
          </SocialIcons>

          </div>

      </div>
    </section>
    
  )
}

export default Login;