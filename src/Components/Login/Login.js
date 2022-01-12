import React, { useState}  from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

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
      
      temp.password = fieldValue.password ==="" ? "Password is required" : "" ||
      fieldValue.password.length < 8 ? "Password must be 8 characters long" : "" ||
      !passwordUppercaseRegex.test(fieldValue.password) ? "Password must contain a upperacase" : "" ||
      !passwordNumberRegex.test(fieldValue.password) ? "Password must contain a number" : "";

      console.log("my password:" , fieldValue.password);
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
    console.log("error", error);
  }

  function handleSubmit(e){
    e.preventDefault();
    validasi();
    console.log('Login Submitted');
  }

  return(
    <section className="section landing-page landing-form page-login">
      <div className="screen-wrapper row">
          <div className="col-lg-8 col-md-8 col-xs-12 col col-img">
            <div className="background-image img-fluid"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-12 col col-form">
            <h1 className='hero-text'> login with your exsiting khanaval account </h1>
            <div className="box-wrapper">
              <form className="form">
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
                      maxLength="8"
                      onBlur={handleChange}
                      onChange={handleChange}
                  />
                  <div className="input-feedback">{error["password"]}</div>
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleSubmit} className="button btn-blue"> Log in </button>
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

          </div>

      </div>
    </section>
    
  )
}

export default Login;