import React from 'react'
import ContactListColumn from './ContactListColumn'
import BoardHeader from './Messageboard/BoardHeader'

function MainScreen() {
  return (
    <div className='flex flex-row'>
        {/* flex row format */}
        <ContactListColumn/>
        <BoardHeader/>
    </div>
  )
}

export default MainScreen