import React from 'react'
import trainerone from '../../assets/traineroneimage.webp'
import trainersix from '../../assets/trainersiximage.avif'
import trainerfive from '../../assets/trainerfiveimage.avif'
import trainerfour from '../../assets/trainerfourimage.avif'
import Footer from '../../Components/Footer/Footer'
import './Classes.css'

const Classes = () => {
  return (
    <>
   
    <div className='classes-container'>
      <div className='classesinfo'>
        <h1>Beginner Soccer Skills</h1>
        <h2>Trainer:<span>JORDAN</span></h2>
        <img src={trainerone} alt="" />
        <p>Designed for newcomers to soccer, this class focuses on the basics: ball control, passing, and understanding the game rules. Perfect for kids or adults just starting out.</p>
      </div>

      <div  className='classesinfo'>
      <h1>Intermediate Soccer Techniques</h1>
        <h2>Trainer: <span>ETHAN</span></h2>
        <img src={trainersix} alt="" />
        <p>For players with basic skills, this class helps refine techniques like dribbling, shooting accuracy, and defensive strategies. It also introduces team coordination drills.</p>
      </div>

      <div  className='classesinfo'>
      <h1>Advanced Soccer Training</h1>
        <h2>Trainer:<span>OLIVIA</span></h2>
        <img src={trainerfive} alt="" />
        <p>Tailored for experienced players looking to excel in competitive matches, this class includes advanced tactics, speed training, and situational gameplay strategies.</p>
      </div>

      <div  className='classesinfo'>
      <h1>Goalkeeper Mastery</h1>
        <h2>Trainer:<span>ALEX</span></h2>
        <img src={trainerfour} alt="" />
        <p>A specialized class for aspiring goalkeepers, focusing on reflex development, diving techniques, and positioning to become a reliable last line of defense.</p>
      </div>
     
    </div>
    <hr/>
    <Footer/>
    </>
  )
}

export default Classes

