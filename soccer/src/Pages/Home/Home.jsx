import React from 'react'
import mainimage from '../../assets/soccerimageone.jpg';
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import slide_section from '../../assets/FirstSlideSection.js'
import './Home.css'
import 'react-slideshow-image/dist/styles.css';
import foodball_video from '../../assets/footballvideo.mp4'
const Home = () => {
  return (
    <div className='home-container'>
      <div className="imgtext-content">
      <img src={mainimage} alt="" />
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
      <div className='heading-section'>
      <p>NEWS AND UPDATES</p>
      </div>
      <div className='newsupdate-sections'>
        <div className='left-section'>
          <div className='news-one'>Upcoming Tournament Announcement:<br/>
          "Get ready for the excitement! Our academy is hosting the Inter-Academy Championship 2024 starting from January 15th. Stay tuned for the match schedule and team line-ups!"</div>
          <div className='news-two'>Player of the Month:<br/>
          "Congratulations to Arjun Kumar for being named 'Player of the Month' for November! His incredible skills and dedication have been an inspiration to all."</div>
          <div className='news-three'>New Training Sessions Introduced:<br/>
          "We are excited to introduce specialized Goalkeeper Masterclass Sessions this December. Enroll now to train with experienced coaches and sharpen your skills!"</div>
          <div className='news-four'>Academy Alumni Success:<br/>
          "A proud moment for our academy as former student Rahul Menon has been selected for the national under-19 football team. Wishing him all the best for his future matches!"</div>
        </div>
        <div className='right-section'>
        <video width="100%" height="auto" controls autoPlay loop muted>
        <source src={foodball_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
      <div className='trainsection-text'>
        <h2>
        YOU DREAM IT? WE TRAIN IT!</h2>
        <p>Use this space to showcase your football academy, its programs, and the opportunities it offers. Help aspiring players connect with your academy and understand how it can help them achieve their goals on and off the field. Highlight what sets your academy apart—whether it's expert coaching, state-of-the-art facilities, or a pathway to professional success. Show how joining your academy can unlock potential and inspire greatness!</p>
      </div>
      <hr/>
     <div className='training-items'>
      <h2>Join the Fan Frenzy</h2>
      <h4>$15</h4>
      <button>Book Now</button>
     </div>
     <hr/>
     <div className='training-items'>
      <h2>Game On, Anytime!</h2>
      <h4>$15</h4>
      <button>Book Now</button>
     </div>
     <hr/>
     <div className='training-items'>
      <h2> Ultimate Football Hub</h2>
      <h4>$15</h4>
      <button>Book Now</button>
     </div>
     <hr/>
     <div className='all-class-btn'>
      <button className='main-btn'><button className='second-btn'>All Classes</button></button>
     </div>
      
    </div>
     
 
   
  )
}

export default Home
