import React from 'react'
import ContactListColumn from './ContactListColumn'
import MessageBoard from './MessageBoard'

function MainScreen() {
  return (
    <div className='flex flex-row'>
        {/* flex row format */}
        <ContactListColumn/>
        <MessageBoard/>
    </div>
  )
}

export default MainScreen