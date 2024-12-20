import React, { useState } from 'react';
import './Login.css';
import closeIcon from '../../assets/closeicon.svg';
import axios from 'axios';

const Login = ({ setShowLogin, setToken }) => {
  const url = "http://localhost:3001";

  const [currentState, setCurrentState] = useState("Login");

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      let newUrl = `${url}/api/user/${currentState === "Login" ? "login" : "register"}`;
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.log(error);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={closeIcon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currentState === "Login" ? null : (
            <input
              type="text"
              placeholder='Your name'
              required
              name='name'
              value={data.name}
              onChange={onChangeHandler}
            />
          )}
          <input
            type="email"
            placeholder='Your email'
            required
            name='email'
            value={data.email}
            onChange={onChangeHandler}
          />
          <input
            type="password"
            placeholder='Password'
            required
            name='password'
            value={data.password}
            onChange={onChangeHandler}
          />
        </div>
        <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;

