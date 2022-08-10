import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import AddFriendProfile from '../AddFriendProfile'
import SearchBar from '../SearchBar'

function AddFriendModal() {
    const [searchTerm, setSearchTerm] = useState("")

    let friendsList = [
        {
            "user_id": "feed2f1d-5985-4c61-9034-a75a637e4b00",
            "first_name": "Kyle",
            "last_name": "Jung",
            "prof_pic_url": "url"
        },
        {
            "user_id": "aasfdsdafa",
            "first_name": "Sam",
            "last_name": "Ha",
            "prof_pic_url": "url"
        },
        {
            "user_id": "asdfne",
            "first_name": "Sepjo",
            "last_name": "Choi",
            "prof_pic_url": "url"
        }
    ]
    
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
                    <SearchBar placeholder="Search by email or username" setSearchTerm={setSearchTerm}/>
                    <AddFriendProfile friendsList={friendsList} searchTerm={searchTerm}/>
                </div>
            </div>
        </div>

    )
}

export default AddFriendModal