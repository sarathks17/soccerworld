import React from 'react'
import './VideoPlayer.css'
import footballVideo from '../../assets/footballvideo.mp4'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
const VideoPlayer = () => {
  return (
    <div className='home-container'>
      <div className="imgtext-content">
      <video width="100%" height="auto" autoPlay loop muted>
  <source src={footballVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <span>SOCCER WROLD</span>
       <button className='optional-buttons'>Join Our Team</button>
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
