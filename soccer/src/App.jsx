import React from 'react'
import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import Join from './Pages/About/About'

import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Classes from './Pages/Classes/Classes'
import Trainers from './Pages/Trainers/Trainers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/trainers' element={<Trainers/>} />
        <Route path='/about-us' element={<Join/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
     
    </div>
  )
}

export default App
