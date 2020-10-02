module.exports = function (sequelize, DataTypes) {

    var Keyword = sequelize.define("Keyword", {

        word : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                nonEmpty: true
            }
        },
        mostRecentTweetId: {
            type: DataTypes.STRING,
            defaultValue: null
        }, 
    
        oldestTweetId: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    })

    Keyword.associate = function(models) {
        Keyword.belongsTo(models.User, {foreignKey: {allowNull: false}})
    }

    return Keyword;
}