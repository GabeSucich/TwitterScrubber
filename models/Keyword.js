module.exports = function (sequelize, DataTypes) {

    var Keyword = sequelize.define("Keyword", {

        word : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                nonEmpty: true
            }
        }
    })

    Keyword.associate = function(models) {
        Keyword.belongsTo(models.User, {foreignKey: {allowNull: false}})
    }

    return Keyword;
}