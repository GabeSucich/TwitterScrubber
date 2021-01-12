const db = require("../models")

const Message = {

    createMessage(messageBody, userId) {
        return db.Message.create({...messageBody, UserId: userId})
    },

    findUserMessages(userId) {
        return db.Message.findAll({where : {UserId : userId}})
    }

}