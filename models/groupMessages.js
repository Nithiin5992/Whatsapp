const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const groupMessages = sequelize.define('groupmessages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  GroupId:Sequelize.STRING,
  userName: Sequelize.STRING,
  message: Sequelize.STRING
  
 
});

module.exports = groupMessages;