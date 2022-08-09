import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useMessengerContext } from '../../hooks/useMessengerContext'

function EditProfileModal() {

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="my-modal"><AiOutlinePlus className='text-2xl cursor-pointer'/></label>
            
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold mb-4">Start a new chat with:</h3>
                </div>
            </div>
        </div>

    )
}

export default EditProfileModal