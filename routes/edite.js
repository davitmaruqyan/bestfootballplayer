const express = require('express');
const router = express.Router();
const players = require('../model/players');
let users;

router.get('/', (req, res, next) => {
  console.log(req.query);
  players.findAll().then((player) => {
    let people = player.map((each) => {
      return each.dataValues
    });
    users = people;
  });
  res.render('edite', {
      title: 'Edite Page',
      us: users
    });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

router.get('/:id', (req, res, next) => {
  console.log(req.query);
})


module.exports = router;
