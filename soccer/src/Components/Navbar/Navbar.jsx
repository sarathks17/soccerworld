import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import SoccerLogo from '../../assets/soccerLogo.png'
import { useNavigate } from 'react-router-dom'
import userlogo from '../../assets/Userlogo.jpg'


const Navbar = ({setShowLogin, token, setToken }) => {
  const navigate = useNavigate();
 const [menu,setMenu] = useState("Home");

  const handleHomePage = () => {
    setMenu("home")
    navigate('/')
  }
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  useEffect(() => {
    const path = window.location.pathname.slice(1);
    setMenu(path || "home");
  }, []);
 
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
{!token ? (
    <button onClick={() => setShowLogin(true)}>Sign In</button>
): (
    <div className="navbar-profile">
        <img src={userlogo} alt="User Profile" className="profile-img" />
        <ul className="dropdown-menu">
            <li onClick={logout} >Logout</li>
        </ul>
    </div>
)}
        </div>
    </div>
  )
}

export default Navbar
