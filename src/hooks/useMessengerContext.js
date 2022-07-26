import { useContext } from 'react'
import MessengerContext from '../contexts/MessengerContext'

export const useMessengerContext = () => {
    const messengerContext = useContext(MessengerContext)

    if (!messengerContext) {throw Error("useMessengerContext must be inside MessengerContextProvider")}

    return messengerContext
}