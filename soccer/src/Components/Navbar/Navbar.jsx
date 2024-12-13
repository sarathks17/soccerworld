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
               <li> <Link to='/classes' className={ menu === 'classes'?'active':""} onClick={()=>setMenu("classes") }>Classes</Link></li>
              <li> <Link to='/trainers' className={ menu === 'trainers'?'active':""} onClick={()=>setMenu("trainers") }>Trainers</Link></li>
              <li> <Link to='/plans' className={ menu === 'plans'?'active':""} onClick={()=>setMenu("plans") }>Plans</Link></li>
            </ul>
            </div>
            <div className='login-section'>
           <h4> <Link to='/login' className={ menu === 'login'?'active':""} onClick={()=>setMenu("login") }>Login Here</Link></h4>
            </div>
           

        </div>
     
    </div>
  )
}

export default Navbar
