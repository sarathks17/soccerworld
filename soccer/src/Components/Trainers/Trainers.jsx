import React from 'react'
import './Trainers.css'
import trainerone from '../../assets/traineroneimage.webp'
import trainertwo from '../../assets/trainertwoimage.webp'
import trainerthree from '../../assets/trainerthreeimage.webp'
const Trainers = () => {
  return (
    <div>
      <div className='trainer-text'>
        <h1>MEET OUR TRAINERS</h1>
      </div>
      <div className='trainers-details-text'>

</div>
<div className='trainer-maincontainer'>

<div className='trainer-container'>
<h3>JORDAN</h3>
<img src={trainerone} alt="" />
<h4>Strength Specialist</h4>
<p>This is the space to introduce the business’s team and what makes it special.</p>
</div>
<div className='trainer-containermain'>
<h3>HANNA</h3>
<img src={trainertwo} alt="" />
<h4>Endurance Specialist</h4>
<p>This is the space to introduce the business’s team and what makes it special.</p>
</div>
<div className='trainer-container'>
<h3>JORDAN</h3>
<img src={trainerthree} alt="" />
<h4>Strength Specialist</h4>
<p>This is the space to introduce the business’s team and what makes it special.</p>
</div>


</div>
<div className='all-class-btn'>
<button className='main-btn'><button className='second-btn'>All Trainers</button></button>
</div>
    </div>
    
  )
}

export default Trainers
