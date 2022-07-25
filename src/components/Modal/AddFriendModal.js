import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import AddFriendProfile from '../AddFriendProfile'
import SeachBar from '../SeachBar'

function AddFriendModal() {
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="my-modal-3"><AiOutlineUserAdd className='text-2xl cursor-pointer'/></label>
            
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold mb-4">Add a New Friend</h3>
                    <SeachBar placeholder="Search by email or username"/>
                    <AddFriendProfile/>
                </div>
            </div>
        </div>

    )
}

export default AddFriendModal