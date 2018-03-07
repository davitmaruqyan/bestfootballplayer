const express = require('express');
const router = express.Router();
const users = require('../model/index');

router.get('/', (req, res, next) => {
  res.render('register', {title: 'Register Page'})
});

router.post('/', (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errObj = {
    errName: '',
    errSurname: '',
    errEmail: '',
    errPass: '',
    errDateBirth: '',
    errGender: ''
  };

  const data = {
    fname: req.body.name,
    lname: req.body.surname,
    email: req.body.email,
    passwordHash: req.body.pass,
    dateBirth: req.body.dateBirth,
    gender: req.body.gender
  };

  if (!req.body.name) {
    errObj.errName = 'Name is required'
  };
  if (!req.body.surname) {
    errObj.errSurname = 'Surname is required'
  };
  if (!regexp.test(req.body.email)) {
    errObj.errEmail = 'Invalid E-mail'
  }
  if (!req.body.pass) {
    errObj.errPass = 'Password is required'
  };
  if (!req.body.dateBirth) {
    errObj.errDateBirth = 'DateBirth is required'
  };
  if (!req.body.gender) {
    errObj.errGender = 'Gender is required'
  }

  if (req.body.name && req.body.surname && regexp.test(req.body.email) && req.body.pass && req.body.dateBirth && req.body.gender) {
    users.sync({force: false}).then(() => {
      return users.create(data);
    });
  }


  res.send(JSON.stringify({
    user: data,
    err: errObj,
    redirect : '/login'
  }
  ));
});

module.exports = router;
