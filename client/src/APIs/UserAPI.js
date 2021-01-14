import Axios from "axios"
import { useEffect } from "react"

const UserAPI = {

    getUserInfo() {
        return Axios({
            method: "GET",
            url: "/api/userInfo"
        }).then(response => {
            return response.data
        }).catch(err => {
            return null
        })
    },

    login(username, password) {
        return Axios({
            url: "/api/login",
            method: "POST",
            data: {
                username: username,
                password: password
            }
        }).then(response => {
            return response.data
        })
    }
}

export default UserAPI