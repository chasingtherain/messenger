import React, { useEffect, useState } from 'react'
import BubbleProfile from './BubbleProfile'
import SeachBar from './SeachBar'
import Settings from './Settings'
import ContactRow from './ContactRow';
import AddFriendModal from './Modal/AddFriendModal';
import NewChatModal from './Modal/NewChatModal';
import { useMessengerContext } from '../hooks/useMessengerContext';
import axios from 'axios';


function ContactListColumn() {
  const {currentUser} = useMessengerContext()
  const [friendList,setFriendList] = useState([])
  const [currentUserInfo,setCurrentUserInfo] = useState([])
  const [currentUserName,setCurrentUserName] = useState("")
  const [currentUserInitial,setCurrentUserInitial] = useState("")

  useEffect(()=> {
    if(currentUser){
      fetchUserInfo(currentUser)
      fetchFriendList(currentUser)
    }},[currentUser])

  const fetchUserInfo = async (userId) => {
    const res = await axios.post(
      "http://api.sideprojectschool.com:3000/api/user/user_info", 
      {"user_id": userId}
    )
    const capitalisedFirstName = res.data.data.first_name[0].toUpperCase() + res.data.data.first_name.slice(1)
    console.log(res.data.data)
    setCurrentUserInfo(res.data.data)
    setCurrentUserName(res.data.data.first_name[0].toUpperCase())
    setCurrentUserInitial(capitalisedFirstName)
  }

  const fetchFriendList = async (userId) => {
    const res = await axios.post(
      "http://api.sideprojectschool.com:3000/api/user/friends", 
      {"user_id": userId}
    )
    console.log(res.data.data.friends)
    setFriendList(res.data.data.friends)
  }

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
          <SeachBar placeholder="Search..."/>
          <div className='flex justify-between mt-4'>
            <p className='text-slate-400 text-sm'>DIRECT MESSAGES</p>
            <div className='flex flex-row gap-5'>
              <AddFriendModal/>
              <NewChatModal friendList={friendList}/>
            </div>
          </div>
          <div className='overflow-auto h-[32rem]'>
            <ContactRow name="Mario" profileName="M"/>
            <ContactRow name="Luigi" profileName="L"/>
            <ContactRow name="Bowser" profileName="B"/>
            <ContactRow name="Peach" profileName="P"/>
            <ContactRow name="Luigi" profileName="L"/>
            <ContactRow name="Bowser" profileName="B"/>
            <ContactRow name="Peach" profileName="P"/>
            <ContactRow name="Mario" profileName="M"/>
            <ContactRow name="Luigi" profileName="L"/>
            <ContactRow name="Bowser" profileName="B"/>
            <ContactRow name="Peach" profileName="P"/>
            <ContactRow name="Luigi" profileName="L"/>
            <ContactRow name="Bowser" profileName="B"/>
            <ContactRow name="Peach" profileName="P"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactListColumn