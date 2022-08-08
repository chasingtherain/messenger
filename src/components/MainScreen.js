import React from 'react'
import { useMessengerContext } from '../hooks/useMessengerContext'
import ContactListColumn from './ContactListColumn'
import BlankBoard from './Messageboard/BlankBoard'
import MessageBoard from './Messageboard/MessageBoard'

function MainScreen() {
  const {selectedChat} = useMessengerContext()
  console.log(selectedChat)
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