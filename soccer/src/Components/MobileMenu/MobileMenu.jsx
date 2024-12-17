import React from 'react'
import './MobileMenu.css'
import {Link} from 'react-router-dom'
const MobileMenu = () => {
  return (
    <div className='mobilemenu-container'>
        <ul>
              <li> <Link to='/' >Home</Link></li>
             
               <li> <Link to='/classes' >Classes</Link></li>
              
              <li> <Link to='/trainers' >Trainers</Link></li>
             
              <li> <Link to='/plans' >Plans</Link></li>
            
              <li></li>
            </ul>
      
    </div>
  )
}

export default MobileMenu
