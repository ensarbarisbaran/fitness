import React from 'react'
import Home from './pages/Home'
import Navbar from './partials/Navbar'
import Login from "./pages/Login"
import { BiMessageRoundedDots } from 'react-icons/bi'
import Register from './pages/Register'




const App = () => {
  return (
    <body>
      <div className="bg-slate-900" >
        <Navbar />
        <div>
          <Home />
        </div>

      </div>
      <div className='  text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "backgroundImage": "url('../src/assets/bg.png" }}>
        <Login />
      </div>
      <div className='  text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "backgroundImage": "url('../src/assets/bg.png" }}>
        <Register />
      </div>
    </body>
  )
}

export default App
