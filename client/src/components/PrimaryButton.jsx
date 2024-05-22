import React from 'react'

const PrimaryButton = ({baslik, onClick}) => {

  return (

  <button onClick={onClick}
     class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {baslik}
  </button>
  )
}

export default PrimaryButton
