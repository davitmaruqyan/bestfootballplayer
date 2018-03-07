const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db = new Sequelize('project', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

db.authenticate().then(() => {
  console.log('Connected!!');
}).catch(() => {
  console.log(err);
});

module.exports = db;
