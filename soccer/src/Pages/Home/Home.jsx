import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import './Home.css'
import 'react-slideshow-image/dist/styles.css';
import foodball_video from '../../assets/footballvideo.mp4'
import trainerone from '../../assets/traineroneimage.webp'
import trainertwo from '../../assets/trainertwoimage.webp'
import trainerthree from '../../assets/trainerthreeimage.webp'
import soccergif from '../../assets/soccer-gif.mp4'
import soccerimagesix from '../../assets/soccerimagesix.jpg'
import googleplay from '../../assets/Google-play.png'
import applestore from '../../assets/apple-store.png'
import footballscreen from '../../assets/phonescreen.png'
import phonescreenvideo from '../../assets/phonescreenvideo.mp4'
import arrow from '../../assets/arrow.gif'
const Home = () => {
  return (
    <div className='home-container'>
      <div className="imgtext-content">
      <video width="100%" height="auto" autoPlay loop muted>
  <source src={soccergif} type="video/mp4" />
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
     <div className='trainers-details-text'>
      <h1>MEET OUR</h1>
      <h1>TRAINERS</h1>
     </div>
     <div className='trainer-container'>
      <h3>JORDAN</h3>
      <img src={trainerone} alt="" />
      <h4>Strength Specialist</h4>
      <p>This is the space to introduce the business’s team and what makes it special.</p>
     </div>
     <div className='trainer-maincontainer'>
     <div className='trainer-containersecond'>
      <h3>JORDAN</h3>
      <img src={trainertwo} alt="" />
      <h4>Strength Specialist</h4>
      <p>This is the space to introduce the business’s team and what makes it special.</p>
     </div>
     </div>
     <div className='trainer-maincontainerthird'>
     <div className='trainer-containerthird'>
      <h3>JORDAN</h3>
      <img src={trainerthree} alt="" />
      <h4>Strength Specialist</h4>
      <p>This is the space to introduce the business’s team and what makes it special.</p>
     </div>
     </div>
     <div className='all-class-btn'>
      <button className='main-btn'><button className='second-btn'>All Trainers</button></button>
     </div>
     <div className='fooball-journytext'>
      <h1>KICK-START YOUR FOOTBALL JOURNEY</h1>
      <p>Discover a passion for the beautiful game at our academy. We’re dedicated to nurturing talent, building skills, and fostering teamwork in a supportive and dynamic environment. Whether you’re aiming to go pro or simply love the sport, our expert coaching and state-of-the-art facilities make us the perfect choice to achieve your goals. Join us and be part of a winning team!</p>
     </div>
     <hr />
     <div className='soccerimagesix-container'>
      <img src={soccerimagesix} alt="" />
     </div>
     <div className='download-section'>
      <div className='left-downloadsection'><h1>DOWNLOAD OUR APP</h1>
      <p>Use this space to promote the<br/>business, its products or its services.</p>
      <div className='download-btn'>
      <img src={googleplay} alt="" />
      <img src={applestore} alt="" />
      </div>
      <div className='innertext-container'>
      <h1>CALL TO ACTION</h1>
      <p>Don’t wait—download our app today and kickstart your football journey!</p>
      <p>Available on Android and iPhone. Download now and become part of our growing academy family.</p>
      <p>Step onto the field with confidence. Get the app now and make every moment count!</p>
      <p>Empowering players to dream, achieve, and inspire. Join us today</p>
      </div>
      
      </div>
      <div className='right-downloadsection'>
        <img src={footballscreen} alt="" />
        <video width="100%" height="auto" autoPlay loop muted>
        <source src={phonescreenvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
       
     
     
    
      
      </div>
     </div>
    
    </div>
     
 
   
  )
}

export default Home
