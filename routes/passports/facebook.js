const express = require('express');
const router = express.Router();

module.exports = function(passport){

  const FacebookStrategy = require('passport-facebook').Strategy;

  passport.use(new FacebookStrategy({
    clientID: "371952366581509",
    clientSecret: "314ec4ab6498357d28504deda2d34dfe",
    callbackURL: 'http://localhost:3000/facebook',
    profileFields: ['id', 'name', 'email']
    },
    function(token, refreshToken, profile, done) {
        // facebookUser.findOne({ 'facebook.id': profile.id }, function(err, user) {
        //   if (err)
        //     return done(err);
        //   if (user) {
        //     return done(null, user);
        //   } else {
        //     var newUser = new facebookUser();
        //     newUser.facebook.id = profile.id;
        //     newUser.facebook.token = token;
        //     newUser.facebook.email = profile.emails || '';
        //
        //     newUser.save(function(err) {
        //       if (err)
        //         throw err;
        //       return done(null, newUser);
        //     });
        //   }
        // });
    }));


  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });


  router.get('/',passport.authenticate('facebook', {scope: 'email'}));

  return router;
}
