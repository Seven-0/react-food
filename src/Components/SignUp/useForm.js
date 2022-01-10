import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    phonenumber: "",
    password: "",
  });
  

  const handleSubmit = async (e) => {
        e.preventDefault();  
        // const signup = {values};   
    await fetch("http://localhost:5050/values", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },      
    });
    setErrors(validate(values));  
    setIsSubmitting(true);
    

    console.log("add Data ", values);
    
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {     
       
        callback()      
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};
export default useForm;
