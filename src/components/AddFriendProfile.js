import React from 'react'
import BubbleProfile from './BubbleProfile'

function AddFriendProfile({initial, name, bubbleWidth}) {
  return (
    <div>
        <div class="card-compact full-w bg-base-300 rounded-sm my-2">
            <div class="card-body flex-row justify-between">
                    <BubbleProfile initial="JC" name="John Cena" bubbleWidth="w-12" nameTextSize="text-lg"/>
                    <button className="badge badge-primary mt-4">Add friend</button>
            </div>
        </div>
        <div class="card-compact full-w bg-base-300 rounded-sm my-2">
            <div class="card-body flex-row justify-between">
                    <BubbleProfile initial="JL" name="John Luna" bubbleWidth="w-12" nameTextSize="text-lg"/>
                    <button className="badge badge-primary mt-4">Add friend</button>
            </div>
        </div>
        <div class="card-compact full-w bg-base-300 rounded-sm my-2">
            <div class="card-body flex-row justify-between">
                    <BubbleProfile initial="JK" name="John Krolling" bubbleWidth="w-12" nameTextSize="text-lg"/>
                    <button className="badge badge-primary mt-4">Add friend</button>
            </div>
        </div>


    </div>
  )
}

export default AddFriendProfile