import React from 'react'
import './Trainers.css'
import trainerone from '../../assets/traineroneimage.webp'
import trainertwo from '../../assets/trainertwoimage.webp'
import trainerthree from '../../assets/trainerthreeimage.webp'
import trainerfour from '../../assets/trainerfourimage.avif'
import trainerfive from '../../assets/trainerfiveimage.avif'
import trainersix from '../../assets/trainersiximage.avif'
import Footer from '../../Components/Footer/Footer'
const Trainers = () => {
  return (
    <>
    <h3>ALL TRAINERS</h3>
    <hr />
    <div className='trainers-container'>
     
      <div className='trainersdetails'>
        <h1>JORDAN</h1>
        <img src={trainerone} alt="" />
        <h2>Strength Specialist</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
      </div>

      <div className='trainersdetails'>
        <h1>HANNA</h1>
        <img src={trainertwo} alt="" />
        <h2>Endurance Specialist</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
      </div>

      <div className='trainersdetails'>
        <h1>EMILY</h1>
        <img src={trainerthree} alt="" />
        <h2>Hip Hop Professional</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
        
      </div>
      
      </div>
      <div className='trainers-container'>
      <div className='trainersdetails'>
        <h1>ALEX</h1>
        <img src={trainerfour} alt="" />
        <h2>Zumba Dancer</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
      </div>

      <div className='trainersdetails'>
        <h1>OLIVIA</h1>
        <img src={trainerfive} alt="" />
        <h2>HIIT Specialist</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
      </div>

      <div className='trainersdetails'>
        <h1>ETHAN</h1>
        <img src={trainersix} alt="" />
        <h2>Strength Specialist</h2>
        <p>This is the space to introduce the business’s team and what makes it special.</p>
      </div>
     </div>
     
   
    <div>
        <hr/>
        <Footer/>
      </div>
    </>
  )
}

export default Trainers

