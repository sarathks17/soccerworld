import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Classes from './Pages/Classes/Classes';
import Trainers from './Pages/Trainers/Trainers';
import Plans from './Pages/Plans/Plans';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} setToken={setToken} />}
      <div>
        <Navbar setShowLogin={setShowLogin} token={token} setToken={setToken} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/plans' element={<Plans />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

