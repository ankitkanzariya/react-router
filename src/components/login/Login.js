import React, { useState } from "react";
import "./log.css";
import validete from "./validete/Validete";
import Nav from "../pages/Nav";


const Log = () => {
  const initialvalues = { UserName: "", Password: "" };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [errors, seterrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    const validationErrors = validete({ ...formvalues, [name]: value });
    seterrors(validationErrors);
  };

  const handleLoginClick = async () => {
    console.log('Login button clicked');
    const validationErrors = validete(formvalues);
    console.log(validationErrors); 
    seterrors(validationErrors);
    setissubmit(true);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8000/niraj", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formvalues)
        });

        console.log(response); // Log the response

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          if (response.status === 404) {
            throw new Error('User not found. Please check your credentials.');
          } else {
            throw new Error('Failed to log in. Please try again.');
          }
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (isLoggedIn) {
    return <Nav />;
  }

  return (
    <>
      <div className="log">
        <div className="card">
          <div className="form">
            <div className="h1">
              <h1>Log in</h1>
            </div>
            <div className="UserName">
              <label>UserName</label>
              <input
                value={formvalues.UserName}
                onChange={handleChange}
                type="text"
                name="UserName"
                placeholder="UserName"
                id="UserName"
              />
            </div>
            <p className="error">{errors.UserName}</p>
            <div className="Password">
              <label>Password</label>
              <input
                value={formvalues.Password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                name="Password"
                id="Password"
                placeholder="Password"
              />
            </div>
            <p className="error">{errors.Password}</p>
            <div className="show-password">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={toggleShowPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
            <div className="btn">
              <button className="Log" type="button" onClick={handleLoginClick}>Log in</button>
            </div>
          </div>
        </div>
      </div>`q`
    </>
  );
};

export default Log;
