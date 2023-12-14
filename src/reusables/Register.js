
import React, { useState } from 'react';
import '../styles/register.css';
import { register } from "../api/authApi";
import { useNavigate } from 'react-router-dom';

const  Register = () => {
  const [registerInfo, setregisterInfo] = useState({ firstName: "", lastName: "", emailAddress: "", password: "" });
  const navigate = useNavigate();

  const handleregisterInfoChange = (name, value) => {
    setregisterInfo({ ...registerInfo, [name]: value });
  };


  const handleRegister = async () => {
    await register(registerInfo)
      .then((res) => {
          navigate("/login", {state: "Thank you for signing up. Please sign in"})
      })
      .catch((error) => {
        alert(`Sorry ${error.message}`);
      });
  };

  return (
    <div className="App">
      <div className="registration-form">
        <h2>Registration Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="auth-input"
            name="firstName"
            value={registerInfo.firstName}
            onChange={(e) => handleregisterInfoChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="auth-input"
            value={registerInfo.lastName}
            onChange={(e) => handleregisterInfoChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="emailAddress"
            className="auth-input"
            value={registerInfo.email}
            onChange={(e) => handleregisterInfoChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="auth-input"
            value={registerInfo.password}
            onChange={(e) => handleregisterInfoChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className='register-btn'>
        <button onClick = {handleRegister}>Register</button>
        </div>
        <div className="register-button">
        <button onClick={() => navigate("/login")} > Already a user?, Log in</button>
      </div>
      </div>
    </div>
  );
}

export default Register;

