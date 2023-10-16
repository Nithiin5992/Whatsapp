const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const groupUsers = sequelize.define('groupUsers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  GroupId:Sequelize.STRING,
  username: Sequelize.STRING,
 
  
  
 
});

module.exports = groupUsers;