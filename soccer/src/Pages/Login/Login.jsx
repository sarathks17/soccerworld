import React from 'react'
import './Login.css'
import Footer from '../../Components/Footer/Footer'
const Login = () => {
  return (
    <>
   <h6>LOGIN</h6>
   <hr />
    <div className='login-container'>
      <div className="login-components">
        <div className='components'>
        <label >Name:</label>
        <input type="text" />
        </div>
        <div className='components'>
        <label >Email:</label>
        <input type="email" />
        </div>
        <div className='components'>
       <label >Age:</label>
       <input type="number" />
       </div>
       <div className='components'>
      <label >Number:</label>
      <input type="number" />
      </div>
      <div className='components'>
        <label >Password:</label>
        <input type="password" />
       
        </div>
      <div className='components'>
        <label >Confirm password:</label>
        <input type="password" />

      
        </div>
     
       
      </div>
      <div className='forsubmit'>
      <button>LOGIN</button>
      </div>
    </div>
    <hr />
    <Footer/>
    </>
  )
}

export default Login
