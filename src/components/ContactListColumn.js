import React, { useEffect, useState } from 'react'
import BubbleProfile from './BubbleProfile'
import SearchBar from './SearchBar'
import Settings from './Settings'
import ContactRow from './ContactRow';
import AddFriendModal from './Modal/AddFriendModal';
import NewChatModal from './Modal/NewChatModal';
import { useMessengerContext } from '../hooks/useMessengerContext';
import axios from 'axios';


function ContactListColumn() {
  const {currentUser, currentUserName, currentUserInitial, capitaliseFirstName, capitaliseInitial, friendList, currentUserInfo,setCurrentUserInfo}  = useMessengerContext()
  const [searchTerm, setSearchTerm] = useState("")
  console.log("currentUser", currentUser)
  console.log("currentUserName",currentUserName)
  console.log("currentUserInitial", currentUserInitial)

  const fakeChatList = [
    {
      "prof_pic_url": "https://media-exp1.licdn.com/dms/image/C5603AQF4jWeLThSkUg/profile-displayphoto-shrink_800_800/0/1657605776404?e=1663804800&v=beta&t=DXJFkWa--PNjm0FSVcFANtzTISlzOHt0KHfeesquda0",
      "last_sent_user_name": "Mustafa",
      "last_message": "Hey there, how are you?",
      "last_message_time": "2022-07-20T15:55:03",
      "session_other_user": "Mustafa",
      "session_id": "abb292b6-5cab-48e0-b27b-fc0198201c9b"
    },
    {
      "prof_pic_url": "https://i.pinimg.com/236x/6a/a7/8a/sdfdsfsd.jpg",
      "last_sent_user_name": "Kyle",
      "last_message": "Message2",
      "last_message_time": "2022-07-20T15:59:48",
      "session_other_user": "aaaa",
      "session_id": "9d56a067-1a02-48c5-ad8d-8c9c31239128"
    },
    {
      "prof_pic_url": "https://i.pinimg.com/236x/6a/a7/8a/sdfdsfsd.jpg",
      "last_sent_user_name": "Cena",
      "last_message": "Message3",
      "last_message_time": "2022-07-20T15:57:48",
      "session_other_user": "aaaa",
      "session_id": "9d56a067-1a02-48c5-ad8d-8c9c31239128"
    }
  ]
  
  return (
    <div>
      <div class="w-full min-w-[60%] bg-base-100 shadow-xl overflow-auto">
        <div class="card-body">
          <div className='flex justify-between border-slate-500'>
            {currentUser && <BubbleProfile 
              initial= {currentUserName} 
              name={currentUserInitial} 
              bubbleWidth="w-16" 
              nameTextSize="text-2xl" 
              status="online"/>}
            <Settings/>
          </div>
          <p className='text-2xl'>Messages</p>
          <SearchBar placeholder="Search..."/>
          <div className='flex justify-between mt-4'>
            <p className='text-slate-400 text-sm'>DIRECT MESSAGES</p>
            <div className='flex flex-row gap-5'>
              <AddFriendModal/>
              <NewChatModal friendList={friendList} searchTerm={searchTerm}/>
            </div>
          </div>
          <div className='overflow-auto h-[32rem]'>
            {
              fakeChatList
              .map(friend => (<ContactRow name={friend.last_sent_user_name} profileName={capitaliseInitial(friend.session_other_user)} lastMessage={friend.last_message}/>))
            }
            <ContactRow name="Mario" profileName="M" lastMessage="Hello!"/>
            <ContactRow name="Luigi" profileName="L" lastMessage="You coming?"/>
            <ContactRow name="Bowser" profileName="B" lastMessage=".."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactListColumn