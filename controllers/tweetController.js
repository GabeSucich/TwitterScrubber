const db = require("../models")

const Tweet = {
    
    findTweetbyId(tweetId, authorId) {
        return db.Tweet.findAll({where : {tweetId: tweetId, ContactAuthorId : authorId}})
    },

    createTweet(tweetBody) {
        return this.findTweetbyId(tweetBody.tweetId, tweetBody.ContactAuthorId).then(dbTweets => {
            if (dbTweets.length != 0) {
                return dbTweet[0]
            } else {
                return db.Tweet.create(tweetBody)
            }
        })
    }
}

module.exports = Tweet
