import React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import BubbleProfile from '../BubbleProfile'
import Settings from '../Settings'

function BoardHeader() {
  return (
          // <div className='card min-w-[75%] min-h-fit bg-slate-200 ml-5'>
          <div className='min-w-[75%] min-h-fit bg-slate-200 ml-5'>
            <div className='flex-row justify-between card-body mt-0'>
              <BubbleProfile initial="JC" name="John Cena" bubbleWidth="w-14" nameTextSize="text-lg"/>
              <GoKebabVertical className='text-3xl cursor-pointer'/>
            </div>
            <div className="divider mt-0"></div> 
          </div>
  )
}

export default BoardHeader