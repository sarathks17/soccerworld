import React, { useState } from 'react'
import './Login.css'
import closeIcon from '../../assets/closeicon.svg'
const Login = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Sign Up")

  return (
    <div className='login-container'>
    <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={closeIcon} alt="" />
        </div>
        <div className='login-popup-inputs'>
           {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
       
       
    </form>
    </div>
  )
}

export default Login
