import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import BubbleProfile from '../BubbleProfile'
import SeachBar from '../SeachBar'

function NewChatModal({friendList}) {
    const fakeFriendList = [
        {
            "user_id": "abcdef",
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
            <label for="my-modal-2"><AiOutlinePlus className='text-2xl cursor-pointer'/></label>
            
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold mb-4">Start a new chat with:</h3>
                    <SeachBar placeholder="Search by email or username"/>
                    {
                        fakeFriendList.map((friend, index) => (
                            <div className='card-body bg-slate-400 py-2 mt-2 rounded-md'>
                                <BubbleProfile initial={friend.first_name} name={friend.first_name} bubbleWidth="w-14" nameTextSize="text-lg"/>
                            </div>
                        ))
                        // friendList.map((friend, index) => <BubbleProfile initial="JC" name="John Cena" bubbleWidth="w-14" nameTextSize="text-lg"/>)
                    }
                    <div className='card-body bg-slate-400 py-2 mt-2 rounded-md'>
                        <BubbleProfile initial="JC" name="John Cena" bubbleWidth="w-14" nameTextSize="text-lg"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewChatModal