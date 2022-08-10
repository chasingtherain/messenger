import React from 'react'
import { useMessengerContext } from '../hooks/useMessengerContext'
import ContactListColumn from './ContactListColumn'
import MessageBoard from './Messageboard/MessageBoard'
import BlankBoard from './Messageboard/BlankBoard'

function MainScreen() {
  const {currentUser, selectedChat} = useMessengerContext()
  console.log(currentUser)
  return (
    <div className='flex flex-row'>
        {/* flex row format */}
        <ContactListColumn/>
        {/* display empty message board if no active chat selected */}
        {
          (selectedChat) 
          ? <MessageBoard/>
          : <BlankBoard/>
        }

    </div>
  )
}

export default MainScreen