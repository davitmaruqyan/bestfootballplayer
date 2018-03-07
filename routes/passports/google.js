const express = require('express');
const router = express.Router();

module.exports = function (passport) {
  const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

  passport.use(new GoogleStrategy({
		clientID: '684406247925-c37l6b8etekdol1acc3a1md9t030bsp0.apps.googleusercontent.com',
		clientSecret: 'eziZiUbvnUMlQcvO8ogRG3NH',
		callbackURL: 'http://localhost:3000/auth/google/callback'
},
		function (accessToken, refresToken, profile, done) {
			// const name = profile.displayName;
			// const id = profil.id;
			// const userToReg = {name, id, accessToken: accessToken};
			// const newUser = new GoogleUser(userToReg);
			// newUser.save().then((user) => {
			// 		return done(null, user);
			// });
		}
));

  router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
  }));

  router.get('/auth/google/callback',
  passport.authenticate('google', {
      successRedirect : '/profile',
      failureRedirect : '/'
  }));

  return router;
}
