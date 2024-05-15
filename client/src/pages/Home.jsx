import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const Home = () => {

    const sercan = ()=>{
        console.log("sercan123")
    }

  return (
    <div>
        <PrimaryButton 
        onClick={()=>sercan()}
        baslik={"alperensar"}
        />
      
    </div>
  )
}

export default Home
