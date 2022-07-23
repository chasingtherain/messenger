import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {
    // const {dispatch, googleLoading, loginWithGoogleRedirect} = useAuthContext()
    const [userEmail, setUserEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")
    const [error, setError] = useState("")
    const [signUpBtnLoading, setSignUpBtnLoading] = useState("")

    const validateForm = (e) => {
        console.log("submit button pressed!")
        console.log("userEmail: ", userEmail)
        console.log("firstName: ", firstName)
        console.log("lastName: ", lastName)
        console.log("userPassword: ", userPassword)
        console.log("confirmUserPassword: ", confirmUserPassword)

        if(!validateEmail(userEmail)) {
            toast.warn("email is invalid!")
            e.preventDefault()
            return false
        }
        if(!firstName){ 
            toast.warn("First name cannot be empty!")
            e.preventDefault()
            return false
        }
        if(!lastName){ 
            toast.warn("Last name cannot be empty!")
            e.preventDefault()
            return false
        }
        if(userPassword.length < 8){ 
            toast.warn("Password must be at least 8 characters long!")
            e.preventDefault()
            return false
        }
        if(userPassword !== confirmUserPassword){ 
            toast.warn("Password fields are different!")
            e.preventDefault()
            return false
        }
    }

    const validateEmail = (email) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    }

    const resetFields = () => {
        setUserEmail("")
        setFirstName("")
        setLastName("")
        setUserPassword("")
        setConfirmUserPassword("")
    }

    return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card rounded-box place-items-center mt-32">
                <h1 className='text-6xl my-6'>Messenger</h1>
                    {/* <form className="form-control w-full max-w-xs" onSubmit={validateForm}> */}
                    <form className="form-control w-full max-w-xs" action="http://api.sideprojectschool.com:3000/api/user/create" method="post" onSubmit={validateForm}>
                        <input type="text" name="email" placeholder="Email address" className="input input-bordered w-full max-w-xs my-2" onChange={(event) => setUserEmail(event.target.value)} value={userEmail}/>
                        <input type="text" name="first_name" placeholder="First name / Given name" className="input input-bordered w-full max-w-xs my-2" onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
                        <input type="text" name="last_name" placeholder="Last name / Family name" className="input input-bordered w-full max-w-xs my-2" onChange={(event) => setLastName(event.target.value)} value={lastName}/>
                        <input type="password" name="password" placeholder="Password (min. 8 characters)" className="input input-bordered w-full max-w-xs my-2" onChange={(event) => setUserPassword(event.target.value)} value={userPassword}/>
                        <input type="password" name="password_confirm" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs my-2" onChange={(event) => setConfirmUserPassword(event.target.value)} value={confirmUserPassword}/>
                        <button type="submit" className='btn btn-primary btn-wide my-2'>Sign Up</button>
                    </form>
                {error && <p className='text-red-400'>{error}</p>}
                <Link to="/sign-in" className='text-secondary mt-4'>Login instead</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp