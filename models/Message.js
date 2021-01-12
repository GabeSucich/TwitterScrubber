const { MessageList } = require("semantic-ui-react");

module.exports = function (sequelize, DataTypes) {

    var Message = sequelize.define("Message", {
        
        text : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        sent : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Message.associate = function(models) {
        Message.belongsTo(models.Contact, {foreignKey: {allowNull: false}});
        Message.belongsTo(models.User, {foreignKey: {allowNull: false}});
        Message.belongsTo(models.MessageTemplate, {foreignKey: {allowNull: true}})
        
    }

    return Message;
}