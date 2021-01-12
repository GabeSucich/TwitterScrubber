import Axios from "axios"

const TweetsAPI = {

    getNewTweets(keyword, mostRecentId = null, oldestId = null) {
        return Axios({
            method: "POST", 
            url: "/api/gettweets",
            data: {
                keyword: keyword, 
                mostRecentId: mostRecentId, 
                oldestId: oldestId}
            }).then(response => {
                const tweets = response.data
                for (const tweet of tweets) {
                    tweet.keyword = keyword
                }
                return tweets
            })
    },

    approveTweet(tweetInfo) {
        return Axios({
            method: "POST",
            url: "/api/approvetweet",
            data: tweetInfo
        }).then(response => {
            const dbTweet = response.data
            return dbTweet
        })
    },

    rejectTweet(tweetInfo) {
        return Axios({
            method: "POST",
            url: "/api/blacklisttweet",
            data: {author_id: tweetInfo.author_id}
        }).then(response => {
            return response.data
        })
    }

}

export default TweetsAPI