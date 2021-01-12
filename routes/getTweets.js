const TweetAssembler = require("../utils/TweetAssembler")

const Keyword = require("../controllers/keywordController")


module.exports = function(app) {
    
    app.post("/api/gettweets/", async (req, res) => {
        
        const userId = req.user.id
        const {mostRecentId, oldestId, keyword} = req.body
        const tweets = await TweetAssembler.compileNewTweets(keyword, userId, mostRecentId, oldestId)
        await Keyword.createKeyword(keyword, userId)
        res.json(tweets)
    })
}






















    
    