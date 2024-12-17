import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import NewsAndUpdates from '../../Components/NewsAndUpdates/NewsAndUpdates'
import Booking from '../../Components/Booking/Booking'
import Trainers from '../../Components/Trainers/Trainers'
import FootballJourney from '../../Components/FootballJourney/FootballJourney'
import AppDownload from '../../Components/AppDownload/AppDownload'
import Membership from '../../Components/Membership/Membership'
import Footer from '../../Components/Footer/Footer'
import MobileMenu from '../../Components/MobileMenu/MobileMenu'
const Home = () => {
  return (
<div>
 
  <VideoPlayer/>
   <MobileMenu/> 
    <NewsAndUpdates/> 
 <Booking/>
  <Trainers/>
 <FootballJourney/>
  <AppDownload/>
    <Membership/>
 <Footer/>
</div>
     
 
   
  )
}

export default Home
