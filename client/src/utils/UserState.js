import React, {useReducer, useContext, createContext} from 'react'
import {SET_USER} from "./action"

const UserContext = createContext()
const {Provider} = UserContext

const reducer = (state, action) =>{
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user}
    }

}

const UserProvider = ({value=[], ...props}) => {

    const [state, dispatch] = useReducer(reducer, {})

    return (
        <Provider value = {[state, dispatch]} {...props}/>
    )
}

const useUserContext = () => {
    return UserContext(UserContext)
}

export {useUserContext, UserProvider}