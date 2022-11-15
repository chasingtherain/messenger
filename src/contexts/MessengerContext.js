import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MessengerContext = createContext()

export const MessengerContextProvider = ({children}) => {
    const endpointBaseUrl = "http://ec2-3-39-59-37.ap-northeast-2.compute.amazonaws.com:3000"
    const mockUser = {
      "user_id": "feed2f1d-5985-4c61-9034-a75a637e4b00",
      "email": "kylejung92@gmail.com",
      "first_name": "Jun",
      "last_name": "Peng"
  }
    const [currentUser, setCurrentUser] = useState(mockUser)
    const [friendList, setFriendList] = useState([])
    const [currentUserInfo,setCurrentUserInfo] = useState([])
    const [selectedChat, setSelectedChat] = useState("")
    const [currentUserName,setCurrentUserName] = useState("JP")
    const [currentUserInitial,setCurrentUserInitial] = useState("Joseph Powell")
    
    // upon login, system will fetch user's info, friend list and active chat list
    console.log(currentUserInfo)
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
        setCurrentUserInfo(mockUser)
        setCurrentUserName(capitaliseInitial("Joseph Powell"))
        setCurrentUserInitial(capitaliseFirstName("Joseph"))
      }
    
      const fetchFriendList = async (userId) => {
        const res = await axios.post(
          `${endpointBaseUrl}/api/user/friends`, 
          {"user_id": userId}
        )
        // console.log(res.data.data.friends)
        setFriendList(res.data.data.friends)
      }

      const fetchActiveChat = async (userId) => {
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
      console.log(firstName)
        return firstName
      }
    
    const capitaliseInitial = (firstName) => {
        if(firstName) return firstName[0].toUpperCase()
        else return null
    }
    return (
        <MessengerContext.Provider value={{
            currentUser,
            currentUserInfo,
            currentUserName,
            currentUserInitial,
            endpointBaseUrl,
            friendList,
            selectedChat,
            capitaliseFirstName,
            capitaliseInitial,
            fetchUserInfo,
            setCurrentUser,
            setFriendList,
            setSelectedChat,
            updateCurrentUser
            }}>
            {children}
        </MessengerContext.Provider>
    )
}

export default MessengerContext