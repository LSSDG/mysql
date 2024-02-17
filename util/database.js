const Sequelize = require('sequelize');

const sequelize=new Sequelize('nodefirstdb','root','danny49',{dialect:'mysql',host:'localhost'})

module.exports=sequelize;