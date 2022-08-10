import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useMessengerContext } from '../hooks/useMessengerContext'

function EditProfilePage() {
    const {capitaliseFirstName, currentUserInfo, endpointBaseUrl, fetchUserInfo} = useMessengerContext()
    const [isDisabled, setIsDisabled] = useState(true)
    const [firstName, setFirstName] = useState(capitaliseFirstName(currentUserInfo.first_name))
    const [lastName, setLastName] = useState(capitaliseFirstName(currentUserInfo.last_name))
    const userId = currentUserInfo.user_id

    const handleFirstNameUpdate = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
        setIsDisabled(false)
    }

    const handleLastNameUpdate = (e) => {
        console.log(e.target.value)
        setLastName(e.target.value)
        setIsDisabled(false)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                `${endpointBaseUrl}/api/user/update_info`, 
                {user_id: userId, first_name: firstName, last_name: lastName}
            );
            console.log(res.data)
            if(res.status === 200) toast.success("profile updated!")
            setIsDisabled(true)
            fetchUserInfo(userId)
        } catch (err) {
            console.log(err)
            console.log(err.response.data)
        }
    }

    return (
    <div>
        <Link to="/">Back home</Link>
        <div class="flex h-screen py-36 px-8 bg-white">
            <div class="mx-auto w-full max-w-lg">
                <h1 class="text-4xl font-medium">Edit Your Profile</h1>
                <form onSubmit={handleFormSubmit} class="mt-10">
                    <div class="flex flex-col">
                        <div class="relative z-0 my-10 flex">
                            <input type="text" name="firstName" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " value={firstName} onChange={handleFirstNameUpdate}/>
                            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">First Name</label>
                        </div>
                        <div class="relative z-0 flex">
                            <input readonly type="text" name="lastName" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " value={lastName} onChange={handleLastNameUpdate}/>
                            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Last Name</label>
                        </div>
                    </div>
                    <button type="submit" class={`btn mt-5 rounded-md px-10 py-2`} disabled={isDisabled} >Update Profile</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default EditProfilePage