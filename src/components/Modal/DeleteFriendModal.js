import React from 'react'
import { GoKebabVertical } from 'react-icons/go'
import axios from 'axios'
import { useMessengerContext } from '../../hooks/useMessengerContext'

function DeleteFriendModal() {
    const {endpointBaseUrl} = useMessengerContext()

    const deleteFriend = async (userId, friendId) => {
        console.log("friend deleted")
        try {
            await axios.post(
                `${endpointBaseUrl}/api/user/user_info`, 
                {"user_id": userId, "friend_id": friendId}
              )
        } catch (error) {
            console.log(error)   
        }
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="my-modal-4">
                <GoKebabVertical className='text-3xl cursor-pointer'/>
            </label>
            
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold mb-4">Delete Contact</h3>
                    <p>This action is permanent and chat history will be deleted forever</p>
                    <p className='text-center text-lg font-medium my-2'>Confirm?</p>
                    <div className='flex justify-center content-center gap-4'>
                        <button className='btn btn-secondary w-1/2 rounded-md' onClick={deleteFriend}>Yes</button>
                        <button className='btn btn-primary w-1/2 rounded-md' onClick={()=>{document.getElementById('my-modal-4').checked = false}}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteFriendModal