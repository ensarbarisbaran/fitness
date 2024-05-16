import React from 'react'

const SecondaryButton = ({title}) => {
  return (
    <div>
      <button class="bg-[#d9534f] hover:bg-[#c3230ed6] text-white font-bold py-2 px-4 border border-blue-700 rounded">
  {title}
</button>
    </div>
  )
}

export default SecondaryButton
