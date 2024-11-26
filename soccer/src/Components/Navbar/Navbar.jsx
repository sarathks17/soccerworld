import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SoccerLogo from '../../assets/soccerLogo.png'

const Navbar = () => {

  const [menu,setMenu] = useState("");
  return (
    <div className='navbar-container'>
        <div className='navbar-elements'>
            <div className='soccer-logo'>
            <img src={SoccerLogo} alt="" />
            </div>
            <div className='headings'>
            <ul>
              <li> <Link to='/' className={ menu === 'home'?'active':""} onClick={()=>setMenu("home") }>Home</Link></li>
               <li> <Link to='/about' className={ menu === 'about'?'active':""} onClick={()=>setMenu("about") }>About Us</Link></li>
              <li> <Link to='/contact-us' className={ menu === 'contact-us'?'active':""} onClick={()=>setMenu("contact-us") }>Contact Us</Link></li>
              <li> <Link to='/join' className={ menu === 'join'?'active':""} onClick={()=>setMenu("join") }>Join</Link></li>
            </ul>
            </div>
            <div className='login-section'>
           <h4>Login Here</h4>
            </div>
           

        </div>
     
    </div>
  )
}

export default Navbar
