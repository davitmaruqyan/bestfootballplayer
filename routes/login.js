const express = require('express');
const router = express.Router();
const users = require('../model/index');
const hashPass = require('../model/hashgeneretpass');

router.get('/', (req, res, next) => {
    res.render('login', { title: 'Login'});
});

router.post('/', (req, res, next) => {
  const errObj = {
    errLogin: '',
    errPass: ''
  };


  let login = req.body.email;
  let pass = req.body.pass;

  if (!login) {
    errObj.errLogin = 'Unknow User';
  };

  if (!pass) {
      errObj.errPass = 'Invalid Password';
  }


  users.findOne({where:{email: login}}).then((client) => {
    if (client) {
      let getPass = hashPass(pass, client.salt) === client.password;
      if (getPass) {
        res.send(JSON.stringify({
          redirect: '/edite'
        }))
      }else {
        errObj.errPass = 'Unknow Password';
        res.send(JSON.stringify(errObj))
      }
    }else {
         errObj.errLogin = 'Invalid Email';
         res.send(JSON.stringify(errObj))
    }

  });

});

module.exports = router;
