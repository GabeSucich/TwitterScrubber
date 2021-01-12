const MessageTemplate = require("../controllers/messageTemplateController")


module.exports = function(app) {

    app.get("/api/messagetemplates", (req, res) => {
        var userId = req.user.id;
        MessageTemplate.findUserMessageTemplates(userId).then(dbMessageTemplates => {
            res.json(dbMessageTemplates)
        })
    })

}