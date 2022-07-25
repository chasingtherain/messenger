import React from 'react'

function SeachBar({placeholder}) {
  return (
    <div>
      <input type="text" placeholder={placeholder} class="input input-bordered input-primary w-full rounded-md" />
    </div>
  )
}

export default SeachBar