export default function validateInfo(values){
  let errors = {}

  // if(!values.phonenumber){
  //   errors.phonenumber ="Phone Number Required"
  // } else if (/^[0-9\b]+$/.test(values.email)){
  //   errors.email = 'Email address is invalid';
  // } else if (values.password.length != 10) {
  //   errors.email = 'Please enter valid phone number.';
  // }   

  // Email
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // Phone Number
  if(!values.phonenumber.trim()){
      errors.phonenumber ="Phone Number Required"
  }
  // Password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  return errors;
}
