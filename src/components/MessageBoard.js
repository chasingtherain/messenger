import React from 'react'
import BubbleProfile from './BubbleProfile'
import Modal from './Modal'
import Settings from './Settings'

function MessageBoard() {
  return (
      <div className='card w-3/4'>
        <div className='card-body flex flex-row justify-between'>
          {/* <BubbleProfile/> */}
          <Settings/>
        </div>
      </div>
  )
}

export default MessageBoard