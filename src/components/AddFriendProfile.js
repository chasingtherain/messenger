import React from 'react'
import { useMessengerContext } from '../hooks/useMessengerContext'
import BubbleProfile from './BubbleProfile'

function AddFriendProfile({initial, name, bubbleWidth, friendsList, searchTerm}) {
  const {capitaliseInitial} = useMessengerContext()

  return (
    <div>
      {
        // list is filtered by search term and unrelated profiles will be hidden
        friendsList
          .filter(friend => friend["first_name"].toLowerCase().includes(searchTerm))
          .map(friend => 
            (<div class="card-compact full-w bg-base-300 rounded-sm my-2">
              <div class="card-body flex-row justify-between">
                      <BubbleProfile 
                        initial={capitaliseInitial(friend.first_name)} 
                        name={`${friend.first_name} ${friend.last_name}`} 
                        bubbleWidth="w-12" 
                        nameTextSize="text-lg"
                      />
                      <button className="badge badge-primary mt-4">Add friend</button>
              </div>
            </div>
            )
          )
      }

        <div class="card-compact full-w bg-base-300 rounded-sm my-2">
            <div class="card-body flex-row justify-between">
                    <BubbleProfile initial="JL" name="John Luna" bubbleWidth="w-12" nameTextSize="text-lg"/>
                    <button className="badge badge-primary mt-4">Add friend</button>
            </div>
        </div>
    </div>
  )
}

export default AddFriendProfile