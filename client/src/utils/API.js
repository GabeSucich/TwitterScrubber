import Axios from "axios"

const API = {

    getUserInfo() {
        return Axios({
            method: "GET",
            url: "/api/userInfo"
        }).then(response => {
            return response.data
        })
    }

}
export default API