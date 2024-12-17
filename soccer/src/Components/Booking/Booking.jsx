import React from 'react'
import './Booking.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Booking = () => {

  const navigate = useNavigate();

  const showAllClasses = () => {
    navigate('/classes')
  }
  return (
    <div>
        
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
     <button>
  
 <Link to='/plans'><span>All Classes</span> </Link>
</button>

     </div>
    </div>
  )
}

export default Booking
