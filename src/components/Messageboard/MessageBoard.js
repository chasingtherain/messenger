import React from 'react'
import BoardBody from './BoardBody'
import BoardFooter from './BoardFooter'
import BoardHeader from './BoardHeader'

function MessageBoard() {
  return (
    <div className='min-w-[75%] min-h-fit bg-slate-200 ml-5 mt-0'>
        <BoardHeader/>
        <div className="divider mt-0"></div>
        <BoardBody/>
        <BoardFooter/>
    </div>
  )
}

export default MessageBoard