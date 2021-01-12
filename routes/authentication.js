const User = require("../controllers/userController")
const passport = require("../config/passport")
const isAuthenticated = require("../config/middleware/isAuthenticated")

module.exports = function(app) {

    app.get("/api/userInfo", isAuthenticated, function(req, res) {
        const {password, ...otherInfo} = req.user
        res.json(otherInfo)
    })

    app.post("/api/signup", function(req, res) {
        
        User.createUser(req.body.username, req.body.password).then(data => {
            if (data) {
                res.redirect(307, "/api/login")
            } else {
                res.json({})
            }
            
        })
    })

    app.post("/api/verifyusername", (req, res) => {
        User.findUser(req.body.username).then(user => {
            if (user) {
                res.send(user.username)
            } else {
                res.json({})
            }
        })
    })

    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        const {password, ...otherInfo} = req.user.dataValues
        res.json(otherInfo)
    })

    app.get("/api/logout", (req, res) => {
        req.logout()
        res.end()
    })
}