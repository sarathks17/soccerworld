import React from 'react'
import './VideoPlayer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
const VideoPlayer = () => {
  return (
    <div className='home-container'>
      <div className="imgtext-content">
      <span>SOCCER WROLD</span>
      <p>WELCOME To 
        SOCCER WORLD
      </p>
      </div>
      <div className='socialmedia-icons'>
       <ul>
        <li><FaSquareInstagram /></li>
        <li><ImFacebook2 /></li>
        <li><FaSquareXTwitter /></li>
       </ul>
      </div>
      </div>
  )
}

export default VideoPlayer
