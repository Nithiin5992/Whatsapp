const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Messages = sequelize.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: Sequelize.STRING,
  message: Sequelize.STRING,
  
 
});

module.exports = Messages;