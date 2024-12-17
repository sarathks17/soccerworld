import React from 'react'
import './VideoPlayer.css'
import footballVideo from '../../assets/footballvideo.mp4'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import footballmobile from '../../assets/mobilefootball.jpg'
const VideoPlayer = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')
  }



  return (
    <div className='home-container'>
      <div className="imgtext-content">
        <img src={footballmobile} alt="" />
      <video width="100%" height="auto" autoPlay loop muted>
  <source src={footballVideo} type="video/mp4" />
  
</video>
      <span>SOCCER WROLD</span>
      
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
