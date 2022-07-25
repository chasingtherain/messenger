import React from 'react'
import BubbleProfile from './BubbleProfile'
import SeachBar from './SeachBar'
import Settings from './Settings'
import { AiOutlineUserAdd } from "react-icons/ai";
import ContactRow from './ContactRow';
import AddFriendModal from './Modal/AddFriendModal';
import NewChatModal from './Modal/NewChatModal';



function ContactListColumn() {
  return (
    <div>
      <div class="w-full min-w-[60%] bg-base-100 shadow-xl overflow-auto">
        <div class="card-body">
          <div className='flex justify-between border-slate-500'>
            <BubbleProfile initial="JP" name="Jerome Powell" bubbleWidth="w-16" nameTextSize="text-2xl" status="online"/>
            <Settings/>
          </div>
          <p className='text-2xl'>Messages</p>
          <SeachBar placeholder="Search..."/>
          <div className='flex justify-between mt-4'>
            <p className='text-slate-400 text-sm'>DIRECT MESSAGES</p>
            <div className='flex flex-row gap-5'>
              <AddFriendModal/>
              <NewChatModal/>
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