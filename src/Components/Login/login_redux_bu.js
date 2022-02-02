import React, { useState, useEffect } from "react";
import axiosIntrceptor from "../../utils/interceptors.js";

import { setLoginPayload, fetchLogin } from "../../store/action.js";
import { useSelector, useDispatch } from "react-redux";

import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  SocialIconLink,
  SocialIcons,
} from '../Footer/FooterElements.js';


function Login(){

  const dispatch = useDispatch();
  const payload  = useSelector((state) => state.reducerLogin);

  const Data={
    email:"",
    password:"",
  }

  const[dataUser, setDataUser] = useState(Data)
  const [error, setError] = useState({})

  const secretKey ="midasFoodDelivery";

  const encryptionPassword = () => {
    const password = dataUser.password
    let chipherEncryptedText = CryptoAES.encrypt(password,secretKey);
    let chipherDecryptedText = CryptoAES.decrypt(chipherEncryptedText.toString(), secretKey);

    // console.log("chipherEncryptedText : ", chipherEncryptedText.toString());
    // console.log("chipherDecryptedText : ", chipherDecryptedText.toString(CryptoENC));
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
    
    // console.log("message:", temp);
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
    // console.log("errorx", error);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validasi();
    encryptionPassword();

    dispatch(fetchLogin(dataUser));
  }

  useEffect(() => {
    console.log('data payload', payload);
  }, [payload]);

  // if (payload.toString().lenght > 0){
  //   return (
  //     <div>
  //       {console.log("isi payload ada gak", payload)}
  //     </div>
  //   )
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
                    <button type="submit" className="button btn-blue"> Log in </button>
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