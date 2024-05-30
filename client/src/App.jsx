import React from 'react'
import Home from './pages/Home'
import Navbar from './partials/Navbar'
import Login from "./pages/Login"
import { BiMessageRoundedDots } from 'react-icons/bi'
import About from './pages/About'
import Register from './pages/Register'
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'
import bgvideo from "./assets/bgvideo.mp4"




const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
