const express = require('express');
const router = express.Router();

module.exports = function (passport) {
  const TwitterStrategy = require('passport-twitter').Strategy;

    passport.use(new TwitterStrategy({
    consumerKey: "SPIhind3hMsox7YBfmNRq2kfe",
    consumerSecret: "mETZkpyuC1rPYyGoMFVEE67hCinzKdAON4jVJutzl2BNLVW6yj",
    callbackURL: "http://localhost:3000/twitter/callback"
  },function(token, tokenSecret, profile, callback) {
    return callback(null, profile);
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  router.get('/twitter/login', passport.authenticate('twitter'))


  return router
}
