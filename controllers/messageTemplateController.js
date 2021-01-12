const db = require("../models")

const MessageTemplate = {

    findMessageTemplateById(messageId) {
        return db.MessageTemplate.findAll({ where: { id: messageId} })
    },

    findUserMessageTemplates(userId) {
        return db.MessageTemplate.findAll({where: {UserId: userId}})
    },

    createMessageTemplate(messageBody, userId) {
        return db.MessageTemplate.create({ ...messageBody, UserId: userId })
    },

    updateMessageTemplate(newMessageBody, messageId) {
        return db.MessageTemplate.find({where: {id: messageId}}).update(newMessageBody)
    },

    deleteMessageTemplate(messageId) {
        return db.Keyword.destroy({
            where: {
                id: messageId
            }
        })
    }

}

module.exports = MessageTemplate

