import React from 'react'
import './AppDownload.css'
import googleplay from '../../assets/Google-play.png'
import applestore from '../../assets/apple-store.png'

const AppDownload = () => {
  return (
    <div className='appdownload-container'>
      <div className='leftsection'>
        <h1>DOWNLOAD FOR ANDROID</h1>
        <p>Experience the world of soccer at your fingertips! Download our Android app and stay connected with the latest match updates, scores, and exclusive content. Whether you're tracking your favorite teams or exploring detailed player stats, our app is designed for an unbeatable soccer experience. Available now on the Google Play Store, get started today and take your passion for soccer wherever you go!</p>
       <div className='leftsection-btn'>
        <button><button>DOWNLOAD NOW</button></button>
       </div>
      </div>
      <div className='rightsection'>
        <h1>DOWNLOAD FOR IOS</h1>
        <p>Stay in the game with our feature-packed soccer app for iOS! Enjoy real-time updates, match highlights, and everything a soccer fan needs—all optimized for your iPhone or iPad. With seamless navigation and the latest in soccer news, you'll never miss a moment. Download it now from the Apple App Store and kick off your ultimate soccer journey!</p>
        <div className='rightsection-btn'>
        <button><button>DOWNLOAD NOW</button></button>
       </div>
      </div>
           
    </div>
  )
}

export default AppDownload
