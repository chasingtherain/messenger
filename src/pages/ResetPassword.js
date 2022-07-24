import React, { useState } from 'react'
import { toast } from 'react-toastify';

function ResetPassword() {
  const [isResetClicked, setIsResetClicked] = useState(false)
  const [emailInput, setEmailInput] = useState("")
  const [error, setError] = useState("")

  return (
    <div className='flex flex-col items-center h-screen ml-2'>
        <p className='text-2xl my-8'>Password Reset</p>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label>
            <div className="input-group">
                <input type="text" placeholder="admin@mail.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="input input-bordered"/>
                <button className="btn btn-square">SEND</button>
            </div>
            {
            (isResetClicked) ? 
              (<div className='mt-5'>
              <p>Email sent! </p>
              <p className='text-red-500'>Note: Password cannot be reset for google sign ups</p>
            </div>)
              : <></>
            }
            {error && <p className='text-red-500'>{`error: ${error}`}</p>}
        </div>
    </div>
  )
}

export default ResetPassword