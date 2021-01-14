import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useUserContext } from "./GlobalStates/UserState"
import UserAPI from "./APIs/UserAPI"

import { SET_USER } from "./GlobalStates/UserState/userAction"
import { Container } from "semantic-ui-react"
import Home from "./pages/Home"
import Credentials from "./pages/Credentials"

export default function Application(props) {

    const [userState, userDispatch] = useUserContext()

    useEffect(() => {
        UserAPI.login("urdadmad", "yeeeeeeet").then(user => {
            console.log(user)
            if (user) {
                userDispatch({ type: SET_USER, user: user })
            }
        })
    }, [])

    return (
        <Container>
            <Router>
                {userState.user ?
                    <Switch>
                        <Route>
                            <Home/>
                        </Route>
                    </Switch>
                    : <Credentials />
                }
            </Router>
        </Container>
    )

}