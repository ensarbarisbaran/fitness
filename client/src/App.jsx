import React from 'react'
import Home from './pages/Home'
import Navbar from './partials/Navbar'
import Login from './pages/Login'



const App = () => {
  return (
    <body>
      <div className="bg-slate-900">
        <Navbar />
        <div>
          <Home />
        </div>

      </div>
      <div className=' bg-green-400
       text-white g-[100vh] flex justify-center items-center bg-cover'>
        <Login />

      </div>
    </body>
  )
}

export default App
