import React from 'react'
import BubbleProfile from './BubbleProfile'
import SeachBar from './SeachBar'
import Settings from './Settings'
import { AiOutlineUserAdd } from "react-icons/ai";
import ContactRow from './ContactRow';

function ContactListColumn() {
  return (
    <div>
      <div class="card w-6/12 min-h-screen bg-base-100 shadow-xl ">
        <div class="card-body">
          <div className='flex justify-between'>
            <BubbleProfile/>
            <Settings/>
          </div>
          <p className='text-2xl mt-4'>Messages</p>
          <SeachBar/>
          <div className='flex justify-between mt-4'>
            <p className='text-slate-400 text-sm'>DIRECT MESSAGES</p>
            <AiOutlineUserAdd className='text-2xl'/>
          </div>
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
  )
}

export default ContactListColumn