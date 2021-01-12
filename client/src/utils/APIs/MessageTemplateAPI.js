import Axios from 'axios'
import MessageTemplate from "../MessageTemplate"

const MessageTemplateAPI = {

    getAllTemplates() {
        return Axios({
            method: "GET",
            url: "/api/messagetemplates"
        }).then(messageTemplates => {
            messageTemplates = messageTemplates.data.map(template => {
                return new MessageTemplate(template)
            })
            return messageTemplates
        })
    }

}

export default MessageTemplateAPI