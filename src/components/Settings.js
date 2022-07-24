import React from 'react'
import { GoKebabVertical } from 'react-icons/go';

function Settings() {
  return (
      <GoKebabVertical className='text-2xl mt-5' onClick={()=> console.log("settings clicked")}/>
  )
}

export default Settings