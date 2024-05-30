import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import bgvideo from "../assets/bgvideo.mp4"

const Home = () => {



  return (
    <div >
      <div className='h-[800px] relative bg-[#00000092] ' >
        <video autoPlay loop muted className='fixed right-0 top-0 h-[800px] w-full object-cover z-[-1] opacity-80 '>
          <source src={bgvideo} type='video/mp4' />
        </video>

      </div>


    </div>
  )
}

export default Home
