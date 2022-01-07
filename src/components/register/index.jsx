import React, { useState } from "react";
import { Link } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fireauth, createUserProfileDocument } from "../../firebase";

const Register = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    sex: "",
    next_of_kin: "",
    occupation: "",
    email_address: "",
    password: "",
    mobile_number: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const onClick = (e) => {
    const { email, password, ...rest } = userData;
    e.preventDefault();

    // const { user } = await createUserWithEmailAndPassword(email, password);
    createUserWithEmailAndPassword(fireauth, email, password).then((data) =>
      console.log(data)
    );
  };
  return (
    <div className="main-content account-content">
      <div className="content">
        <div className="container">
          <div className="account-box">
            <form className="form-signin" action="#">
              <div className="account-title">
                <h3>Register</h3>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="first_name"
                  onChange={(e) => onChange(e)}
                  type="text"
                  value={userData.first_name}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="last_name"
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  value={userData.last_name}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  name="age"
                  onChange={(e) => onChange(e)}
                  type="number"
                  className="form-control"
                  value={userData.age}
                />
              </div>
              <div className="form-group">
                <label>Sex</label>
                <input
                  name="sex"
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  value={userData.sex}
                />
              </div>
              <div className="form-group">
                <label>Next of Kin</label>
                <input
                  name="next_of_kin"
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  value={userData.next_of_kin}
                />
              </div>
              <div className="form-group">
                <label>Occupation</label>
                <input
                  name="occupation"
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  value={userData.occupation}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  name="email_address"
                  onChange={(e) => onChange(e)}
                  type="email"
                  className="form-control"
                  value={userData.email_address}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  onChange={(e) => onChange(e)}
                  type="password"
                  className="form-control"
                  value={userData.password}
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  name="mobile_number"
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  value={userData.mobile_number}
                />
              </div>
              <div className="form-group form-check">
                <label>
                  <input type="checkbox" />I have read and agree the Terms &amp;
                  Conditions
                </label>
              </div>
              <div className="form-group text-center">
                <button
                  className="btn btn-primary account-btn"
                  type="submit"
                  onClick={(e) => onClick(e)}
                >
                  Signup
                </button>
              </div>
              <div className="text-center login-link">
                Already have an account?&nbsp;
                <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
