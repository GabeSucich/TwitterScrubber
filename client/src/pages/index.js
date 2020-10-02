import React, {useEffect} from 'react'
import {useUserContext} from "../utils/UserState"
import API from "../utils/API"
import Home from "./Home"
import Credentials from "./Credentials"
import {SET_USER} from "../utils/action"

export default function Application(props) {

    const [userState, userDispatch] = useUserContext()

    useEffect(() => {
        API.getUserInfo().then(user => {
            if (user) {
                userDispatch({type: SET_USER, user: user})
            }
        })
    }, [])

    return (
        <div>
        {userState.user ? <Home/> : <Credentials/>}
        </div>
    )
}