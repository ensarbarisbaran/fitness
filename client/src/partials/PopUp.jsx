import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

const PopUp = ({Headline,description,onClick}) => {
  return (

    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        
     <div className="bg-white p-2 rounded flex flex-col justify-between">
        <div>
        <h1 className='text-center text-2xl font-bold'>{Headline}</h1>

        <p className='p-2 '>{description}</p>
        </div>
       
        <div className=' bottom-0 gap-2 flex items-end justify-center'>
          <PrimaryButton baslik={"Anladım"} />
          <SecondaryButton title={"Tamam"}/>
        </div>
     </div>

    </div>
  )
}

export default PopUp
