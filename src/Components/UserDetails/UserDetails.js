import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "../UserDetails/userdetails.css";

function UserDetails() {
  const dataUserDetail = {
    name: "",
    phoneNo: "",
    email: "",
  };
  const [image, setImage] = useState();
  const [userDetail, setUserDetails] = useState(dataUserDetail);
  const [error, setError] = useState({});

  const validate = (value = userDetail) => {
    let temp = { ...error };
    // Note: Nama
    // nama bisa kosong dan tidak boleh mengandung huruf dan angka
    // Bisa diupdate
    if ("name" in value) {
      temp.name =
      value.name === ""
        ? ""
        : "" || !/\S+@\S+\.\S+/.test(value.name)
        ? "Invalid Email "
        : "";
    console.log("Temporary Email :", value.name);    }
    // Note: Phone Number
    // dimulai dengan 0 dan min 6 panjang karakter
    // bisa diupdate

    const phonenumberRegex = /([0])/;
    if ("phoneNo" in value) {
      temp.phoneNo =
      value.phoneNo === ""
          ? "Phone Number is required"
          : "" || !phonenumberRegex.test(value.phoneNo)
          ? "Invalid Phone Number "
          : "" || value.phoneNo.length < 6
          ? "Invalid Phone Number character length"
          : "";
    }
    //  Note : Email
    // validasi email

    if ("email" in value) {
      temp.email =
      value.email === ""
          ? "Email is required"
          : "" || !/\S+@\S+\.\S+/.test(value.email)
          ? "Invalid Email "
          : "";
      console.log("Temporary Email :", value.email);
    }
    console.log(temp);
    setError({
      ...temp,
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({
      ...userDetail,
      [name]: value,
    });
    validate({ [name]: value });
    console.log("error", error);
  };

    const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <section className="section landing-page landing-form page-user">
      <div className="screen-wrapper">
        <div className="box-wrapper">
          <h1 className="hero-text">
            User Details <br /> for Khanaval Food
          </h1>
          <form className="form">
            <div className="form-group">
              <div className="img-holder ">
                <img src={image} alt="" id="img" className="img" max-width="100%" />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  accept="image/*"
                  name="image-upload "
                  id="input"
                  onBlur={handleChange}
                  onChange={handleImage}
                />
              </div>
              <div className="label ">
                <label className="image-upload" htmlFor="input">
                  <AddPhotoAlternateIcon /> Choose your Photo
                </label>
              </div>
            </div>
            <div className="form-group">
              <div>
                <h2> Name </h2>{" "}
              </div>
              <input
                name="name"
                placeholder="Your Name"
                value={userDetail.name}
                onBlur={handleChange}
                onChange={handleChange}
              />
              <div className="input-feedback"> {error["name"]} </div>
            </div>
            <div className="form-group">
              <div>
                <h2> Phone Number </h2>{" "}
              </div>
              <input
                name="phoneNo"
                placeholder="Your Phone Number"
                value={userDetail.phoneNo}
                minLength="6"
                onBlur={handleChange}
                onChange={handleChange}
              />
              <div className="input-feedback"> {error["phoneNo"]} </div>
            </div>
            <div className="form-group">
              <div>
                <h2> Email Address </h2>{" "}
              </div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={userDetail.email}
                onBlur={handleChange}
                onChange={handleChange}
              />
              <div className="input-feedback"> {error["email"]} </div>
            </div>
          </form>
          <div className="disclaimer">
          <p className="text-Footer">
            Communication and transaction history from Khanaval will be sent to
            this email address.
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default UserDetails;
