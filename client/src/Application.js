import React, { useEffect, useReducer } from 'react'
import {useUserContext} from "./GlobalStates/UserState"
import UserAPI from "./utils/APIs/UserAPI"

import {SET_USER} from "./GlobalStates/UserState/userAction"
import {Container} from "semantic-ui-react"
import Home from "./pages/Home"
import Credentials from "./pages/Credentials"

export default function Application(props) {
    
    const [userState, userDispatch] = useUserContext()

    useEffect(() => {
        UserAPI.login("urdadmad", "yeeeeeeet").then(user => {
            console.log(user)
            if (user) {
                userDispatch({type: SET_USER, user: user})
            }
        })
    }, [])
    return (
        <Container>
            {userState.user ? <Home/> : <Credentials/>}
        </Container>
    )
}