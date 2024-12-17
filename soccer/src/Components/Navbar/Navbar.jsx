import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SoccerLogo from '../../assets/soccerLogo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin,navbarRef }) => {

  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/')
  }

  const [menu,setMenu] = useState("");
 
  return (
    <div  className='navbar-container'>
        <div className='navbar-elements'>
            <div className='soccer-logo'>
            <img src={SoccerLogo} alt="" onClick={handleHomePage}/>
            </div>
            <div className='headings'>
            <ul>
              <li> <Link to='/' className={ menu === 'home'?'active':""} onClick={()=>setMenu("home") }>Home</Link></li>
               <li> <Link to='/classes' className={ menu === 'classes'?'active':""} onClick={()=>setMenu("classes") }>Classes</Link></li>
              <li> <Link to='/trainers' className={ menu === 'trainers'?'active':""} onClick={()=>setMenu("trainers") }>Trainers</Link></li>
              <li> <Link to='/plans' className={ menu === 'plans'?'active':""} onClick={()=>setMenu("plans") }>Plans</Link></li>
              <li></li>
            </ul>
          
           
            </div>
          <div className='login-section'>
           <button onClick={()=>setShowLogin(true)}>Sign In</button>
          </div>
           

        </div>
     
    </div>
  )
}

export default Navbar
