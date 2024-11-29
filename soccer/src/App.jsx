import React from 'react'
import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import About from './Pages/About/About'
import Join from './Pages/Join/Join'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
