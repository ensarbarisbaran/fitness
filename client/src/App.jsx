import React from 'react'
import Home from './pages/Home'
import Navbar from './partials/Navbar'


const App = () => {
  return (
    <body class="bg-cyan-400" >


      <div class="bg-cyan-400">
        <Navbar />
        <h1 className="text-3xl font-bold underline">

        </h1>
        <div>
          <Home />

        </div>
      </div>
    </body>
  )
}

export default App
