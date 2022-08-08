import React from 'react'
import { useMessengerContext } from '../../hooks/useMessengerContext'
import BubbleProfile from '../BubbleProfile'
import DeleteFriendModal from '../Modal/DeleteFriendModal'

function BoardHeader() {
  const {capitaliseInitial, selectedChat} = useMessengerContext()
  return (
          // <div className='card min-w-[75%] min-h-fit bg-slate-200 ml-5'>
            <div className='max-h-[10%] flex-row justify-between card pl-4 pt-4 mt-4 mr-4'>
              <BubbleProfile initial={capitaliseInitial(selectedChat)} name={selectedChat} bubbleWidth="w-14" nameTextSize="text-lg"/>
              <DeleteFriendModal/>
            </div>
  )
}

export default BoardHeader