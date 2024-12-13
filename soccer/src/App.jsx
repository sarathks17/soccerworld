import React from 'react'
import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Classes from './Pages/Classes/Classes'
import Trainers from './Pages/Trainers/Trainers'
import Plans from './Pages/Plans/Plans'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/trainers' element={<Trainers/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
     
    </div>
  )
}

export default App
