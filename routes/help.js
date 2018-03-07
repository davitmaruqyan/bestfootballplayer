const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('help', {title: 'Help Page'})
});

module.exports = router;
