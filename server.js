var express = require('express')
var session = require("express-session");
var db = require('./models')

var passport = require('./config/passport')

var PORT = process.env.PORT || 3001;

app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(session({ secret: "XDLMFAOURDAD_6969", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/authentication")(app)
require("./routes/getTweets")(app)
require("./routes/handleTweets")(app)
require("./routes/keywords")(app)
require("./routes/messageTemplates")(app)

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on localhost:" + PORT)
    })
})