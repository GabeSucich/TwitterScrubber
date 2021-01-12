import Axios from "axios"

const KeywordAPI = {
    
    getAllKeywords() {
        return Axios({
            method: "GET",
            url: "api/keywords"
        }).then(keywords => {

            return keywords.data
        })
    }

}

export default KeywordAPI

