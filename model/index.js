const db = require('./db/index');
const hashpassword = require('./hashgeneretpass');
const sequelize = require('sequelize');

const users = db.define('user', {
  fname:{
    type: sequelize.STRING,
    defaultValue: true
  },

  lname: {
    type: sequelize.STRING,
    defaultValue: true
  },

  email: {
    type: sequelize.STRING,
    defaultValue: true,
    unique: true
  },

  gender: {
    type: sequelize.ENUM('male', 'female')
  },

  birtDay: {
    type: sequelize.DATE,
     defaultValue: sequelize.NOW
  },

  password:{
   type:sequelize.STRING,
    defaultValue: true
 },

 salt: {
    type: sequelize.STRING
},

 passwordHash: {
  type: sequelize.VIRTUAL,
  set: function (pass) {
    let salt = Math.random().toString();
     this.setDataValue('salt', salt);
     this.setDataValue('password', hashpassword(pass, salt));
   },
}

}, { timestamps: false });

module.exports = users;
