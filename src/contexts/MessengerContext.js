import React, { createContext, useState } from 'react'

export const MessengerContext = createContext()

export const MessengerContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState("")
    
    const updateCurrentUser = (user) => {
        setCurrentUser(user)
    }
    const capitaliseFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.slice(1)
      }
    
    const capitaliseInitial = (firstName) => {
        return firstName[0].toUpperCase()
    }
    return (
        <MessengerContext.Provider value={{
            currentUser,
            capitaliseFirstName,
            capitaliseInitial,
            setCurrentUser,
            updateCurrentUser
            }}>
            {children}
        </MessengerContext.Provider>
    )
}

export default MessengerContext