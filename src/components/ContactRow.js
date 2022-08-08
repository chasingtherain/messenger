import React from 'react'
import { useMessengerContext } from '../hooks/useMessengerContext'

function ContactRow({lastMessage,name,profileName}) {
  const {selectedChat, setSelectedChat} = useMessengerContext()

  return (
    <div class="card-compact full-w bg-base-300 rounded-sm border-2 border-slate-100" onClick={() => setSelectedChat(name)}>
      <div class="card-body">
        <div className='flex'>
          <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span class="text-xl">{profileName}</span>
                    </div>
          </div> 
          <div className='flex-col ml-4 mt-1'>
            <p className='text-slate-600'>{name}</p>
            <p className='text-slate-500'>{lastMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactRow