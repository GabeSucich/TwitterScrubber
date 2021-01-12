const Contact = require("../controllers/contactController")
const Tweet = require("../controllers/tweetController")
const Blacklist = require("../controllers/blacklistController")

module.exports = function(app) {
    
    app.post("/api/approvetweet", (req, res) => {
        const userId = req.user.id
        const info = req.body
        const authorData = {UserId: userId, authorId: info.author_id, username: info.username, name: info.name, imgUrl: info.profile_image_url}
        const tweetData = {tweetId: info.id, keyword: info.keyword, tweetDate: info.created_at, text: info.text}

        Contact.createContact(authorData, userId).then(dbAuthor => {
            tweetData.ContactAuthorId = dbAuthor.authorId
            Tweet.createTweet(tweetData).then(dbTweet => {
                res.json(dbTweet)
            })
        })
    })

    app.post("/api/blacklisttweet", (req, res) => {
        
        Blacklist.addToBlackList(req.body.author_id, req.user.id).then(dbBlacklister => {
            res.json(dbBlacklister)
        })
    })
}