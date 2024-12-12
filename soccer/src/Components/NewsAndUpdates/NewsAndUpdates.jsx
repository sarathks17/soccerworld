import React from 'react'
import  './NewsAndUpdates.css'
import footballplaying from '../../assets/footballplaying.mp4'
const NewsAndUpdates = () => {
  return (
    <>
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
      <video width="100%" height="auto"  autoPlay loop muted>
      <source src={footballplaying} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
    </div>
    </>
  
  )
}

export default NewsAndUpdates
