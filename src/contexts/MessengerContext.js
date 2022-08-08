import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MessengerContext = createContext()

export const MessengerContextProvider = ({children}) => {
    const endpointBaseUrl = "http://ec2-3-39-59-37.ap-northeast-2.compute.amazonaws.com:3000"
    const [currentUser, setCurrentUser] = useState("")
    const [friendList, setFriendList] = useState([])
    const [currentUserInfo,setCurrentUserInfo] = useState([])
    const [currentUserName,setCurrentUserName] = useState("")
    const [currentUserInitial,setCurrentUserInitial] = useState("")
    
    // upon login, system will fetch user's info and friend list
    useEffect(()=> {
        if(currentUser){
          fetchUserInfo(currentUser)
          fetchFriendList(currentUser)
        }},[currentUser])
    
      const fetchUserInfo = async (userId) => {
        const res = await axios.post(
          `${endpointBaseUrl}/api/user/user_info`, 
          {"user_id": userId}
        )
        console.log(res.data.data)
        setCurrentUserInfo(res.data.data)
        setCurrentUserName(capitaliseInitial(res.data.data.first_name))
        setCurrentUserInitial(capitaliseFirstName(res.data.data.first_name))
      }
    
      const fetchFriendList = async (userId) => {
        const res = await axios.post(
          `${endpointBaseUrl}/api/user/friends`, 
          {"user_id": userId}
        )
        // console.log(res.data.data.friends)
        setFriendList(res.data.data.friends)
      }

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
            currentUserName,
            currentUserInitial,
            endpointBaseUrl,
            friendList,
            capitaliseFirstName,
            capitaliseInitial,
            setCurrentUser,
            setFriendList,
            updateCurrentUser
            }}>
            {children}
        </MessengerContext.Provider>
    )
}

export default MessengerContext