import React from 'react'

const PrimaryButton = ({baslik, onClick}) => {

  return (

   <button onClick={onClick}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    <h1 className='text-xl font-bold text-center '>{baslik}</h1>
   </button>
  )
}

export default PrimaryButton
