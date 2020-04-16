// const express = require('express');
const router = require("express").Router();
const userController = require("../../server/controllers/userController");
const passport = require("./passport/")
// , LocalStrategy = require('passport-local').Strategy;


// // PASSPORT CONFIGURATION
// passport.use(new LocalStrategy(
//   function(email, password, done) {
//     User.findOne({ email: email }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect email.' });
//       }
//         console.log("and you're in");

//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//   done(err, user);
//   });
// });

// Getting User Basic Info - AUTHORIZED routes
router.route("/")
  .get(userController.getUser)
  .post(userController.create);

// router.route("/:id")
//    .get(userController.findById);

router.post(
  '/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          email: req.user.email
      };
      res.send(userInfo);
  }
)
// router.post('/user', userController.validateToken, userController.getUser);
// router.post(userController.logout);
// router.post(userController.signup);


// API GET/POST ROUTES

module.exports = router;