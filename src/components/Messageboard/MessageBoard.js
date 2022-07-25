import React from 'react'
import BoardBody from './BoardBody'
import BoardFooter from './BoardFooter'
import BoardHeader from './BoardHeader'

function MessageBoard() {
  return (
    <div className='min-w-[70%] min-h-fit bg-slate-200 mt-0'>
        <BoardHeader/>
        <div className="divider m-0"></div>
        <BoardBody/>
        <BoardFooter/>
    </div>
  )
}

export default MessageBoard