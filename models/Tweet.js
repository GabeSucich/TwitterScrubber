module.exports = function (sequelize, DataTypes) {

    var Tweet = sequelize.define("Tweet", {

        tweetId : {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }, 
            primaryKey: true
        },
        keyword : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tweetDate: {
            type: DataTypes.DATE
        },
        text : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    Tweet.associate = function(models) {
        Tweet.belongsTo(models.Contact, {foreignKey: {allowNull: false}})
    }

    return Tweet
}