import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useMessengerContext } from '../hooks/useMessengerContext'
import SignIn from '../pages/Signin'

function PrivateRoute() {
    const {currentUser} = useMessengerContext()
    return (
        (currentUser) 
            ? <Outlet/> 
            : <Navigate to="/sign-in"/>
    )
}

export default PrivateRoute