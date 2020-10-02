import React, { useEffect, useReducer } from 'react'
import {useUserContext} from "./utils/UserState"
import API from "./utils/API"
import {SET_USER} from "./utils/UserState/userAction"
import {Container} from "semantic-ui-react"
import Home from "./pages/Home"
import Credentials from "./pages/Credentials"

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
        <Container>
            {userState.user ? <Home/> : <Credentials/>}
        </Container>
    )
}