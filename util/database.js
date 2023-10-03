const Sequelize = require('sequelize');

const sequelize = new Sequelize('whatsapp','root','Nithin5992',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;