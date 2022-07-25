import React from 'react'
import { GoKebabVertical } from 'react-icons/go';

function Settings() {
  return (
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="m-1">
          <GoKebabVertical className='text-2xl mt-5 ml-32 cursor-pointer'/>
          </label>
        <ul tabindex="0" class="dropdown-content menu p-2 border-2 border-slate-600 shadow-lg bg-base-100 rounded-box w-52">
          <li><a>Settings</a></li>
          <li><a>My Profile</a></li>
        </ul>
      </div>
  )
}

export default Settings