

module.exports = function (sequelize, DataTypes) {

    var Contact = sequelize.define("Contact", {

        authorId : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                nonEmpty: true
            },
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                nonEmpty: true
            }
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        responded: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        successful: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                nonEmpty: true
            }
        },
        imgUrl : {
            type: DataTypes.STRING
        }
    })

    Contact.associate = function(models) {
        Contact.hasOne(models.Tweet, { onDelete: "cascade"})
        Contact.belongsTo(models.User, {foreignKey: {allowNull: false} })
    }

    return Contact
}