import React from 'react'
import './Footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
       <div className='email-container'>
       <h1>Join Our Team<br/>and get access to exclusive training tips</h1>
       <div className='email-section'>
       <label>Email*</label>
       <br/>
       <input type="text" />
       <button>Submit</button>
       </div>
       <div className='footer-container'>
        <div className='footer-elements'>
          <ul>
            <li>Training Hours</li>
            <li>Mon – Fri: 7:00am – 10:00pm</li>
            <li>Sat: 8:00am – 1:00pm</li>
            <li>Sun: Closed</li>
          </ul>
          <ul>
            <li>Address</li>
            <li>500 Terry Francine Street,
            San Francisco, CA 94158</li>
          </ul>
          <ul>
            <li>Classes</li>
            <li>Our Place</li>
            <li>Trainers</li>
            <li>Plans</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
            <li>Accessibility Statement</li>
            <li>FAQ</li>
          </ul>
        </div>
       </div>
       <div className='socialmedia-logos'>
        <ul>
        <li><FaSquareInstagram /></li>
        <li><ImFacebook2 /></li>
        <li><FaSquareXTwitter /></li>
       </ul>
        </div>
       
      </div>
      <hr />
      <div className='copyright-text'>
      <p>© 2024 Soccer Academy. All rights reserved. Unauthorized reproduction or distribution of content is prohibited.</p>

      </div>
    </div>
  )
}

export default Footer
