import axios from 'axios'
import React, { useState } from 'react'
import { useMessengerContext } from '../hooks/useMessengerContext'
import BubbleProfile from './BubbleProfile'

function AddFriendProfile({initial, name, bubbleWidth, friendsList, searchTerm}) {
  const {capitaliseInitial, currentUserInfo, endpointBaseUrl} = useMessengerContext()
  const [friendRequestSent, setFriendRequestSent] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleAddFriend = async (friendId) => {
    console.log("attempting to add friend...")
    setIsDisabled(true)
    try {
        console.log(friendId)
        await axios.post(
            `${endpointBaseUrl}/api/user/add_friend`, 
            {"user_id": currentUserInfo.user_id, "friend_id": friendId}
          )
        setFriendRequestSent(true)
    } catch (error) {
        console.log(error)   
    }
  }

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
                      <button 
                        className={"badge badge-primary mt-4"}
                        disabled = {isDisabled}
                        onClick={() => handleAddFriend(friend.user_id)}
                      >
                        Add friend</button>
              </div>
            </div>
            )
          )
      }
    </div>
  )
}

export default AddFriendProfile