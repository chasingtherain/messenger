import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import {GoogleButton} from 'react-google-button'
import axios from 'axios';

function SignIn() {
    // const {dispatch, googleLoading, loginWithGoogleRedirect} = useAuthContext()
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const validateSignIn = async (e) => {
        e.preventDefault()
        try {
            console.log(userEmail,userPassword)
            const userInfo = {email: userEmail, password: userPassword}
            console.log(JSON.stringify(userInfo))
            const res = await axios({
                method: 'get',
                url: "http://api.sideprojectschool.com:3000/api/user/login", 
                data: JSON.stringify(userInfo), 
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            console.log(res)
            
            if(res.status === 200) navigate('/')
        } catch (err) {
            console.log(err)
            console.log(err.response.data)
            setError(err)
        }
    }

    return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card rounded-box place-items-center mt-40">
                <h1 className='text-6xl my-12'>Messenger</h1>
                <form className="form-control w-full max-w-xs" onSubmit={validateSignIn}>
                    <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs" onChange={(event) => setUserEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-3" onChange={(event) => setUserPassword(event.target.value)}/>
                    <button type="submit" className='btn btn-primary btn-wide my-2'>Sign In</button>
                </form>
                {/* <button className={`btn btn-wide btn-primary my-2 ${signUpBtnLoading}`} onClick={signUpWithEmail}>SIGN UP</button> */}
                {error && <p className='text-red-400'>{error}</p>}
                <Link to="/sign-up" className='text-secondary mt-4'>Sign Up Instead</Link>
                <Link to="/forgot-password" className='text-secondary mt-4'>Forgot Password</Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn