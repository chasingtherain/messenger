import React, { createContext, useState } from 'react'

export const MessengerContext = createContext()

export const MessengerContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState("")

    const updateCurrentUser = (user) => {
        setCurrentUser(user)
    }

    return (
        <MessengerContext.Provider value={{
            currentUser,
            setCurrentUser,
            updateCurrentUser
            }}>
            {children}
        </MessengerContext.Provider>
    )
}

export default MessengerContext