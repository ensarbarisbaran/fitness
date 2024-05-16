import React from 'react'
import Home from './pages/Home'
import Navbar from './partials/Navbar'


const App = () => {
  return (
    <body>


      <div className="bg-slate-900">
        <Navbar />

        <div>
          <Home />

        </div>
      </div>
    </body>
  )
}

export default App
