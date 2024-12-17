import React from 'react'
import './Trainers.css'
import trainerone from '../../assets/traineroneimage.webp'
import trainertwo from '../../assets/trainertwoimage.webp'
import trainerthree from '../../assets/trainerthreeimage.webp'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Trainers = () => {

  const navigate = useNavigate();

  const showAllTrainers = () => {
    navigate('/trainers')
  }
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
<div className='trainers-btn'>
<button>
  <Link to="/trainers"><span>All Trainers</span></Link>
</button>

</div>
    </div>
    
  )
}

export default Trainers
