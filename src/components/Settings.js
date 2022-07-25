import React from 'react'
import { GoKebabVertical } from 'react-icons/go';

function Settings() {
  return (
      <button onClick={()=> console.log("settings clicked")}>
        <GoKebabVertical className='text-2xl mt-5 ml-32'/>
      </button>
  )
}

export default Settings