const User = require("../controllers/userController")

module.exports = function(app) {
    app.get("/api/userInfo", function(req, res) {
        res.json(req.user)
    })

    app.post("/api/sigup", function(req, res) {
        console.log("hit")
        User.createUser(req.body.username, req.body.password).then(data => {
            res.json(data)
        })
    })
}