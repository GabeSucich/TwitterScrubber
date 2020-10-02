const db = require("../models")

module.exports = {

    findUser(username) {

        return db.User.find( { where: {username: username} } )
    },

    createUser(username, password) {
        return this.findUser(username).then(user => {
            if (user) {
                return {}
            } else {
                return db.User.create({username: username, password: password}).then(user => {
                    return user
                })
            }
        })
    }
}