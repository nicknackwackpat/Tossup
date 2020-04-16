// const express = require('express');
const router = require("./node_modules/express").Router();
const userController = require("../../controllers/userController");
const passport = require("./node_modules/passport"), LocalStrategy = require('./node_modules/passport-local').Strategy;

// PASSPORT CONFIGURATION
passport.use(new LocalStrategy(
   function(email, password, done) {
     User.findOne({ email: email }, function (err, user) {
       if (err) { return done(err); }
       if (!user) {
         return done(null, false, { message: 'Incorrect email.' });
       }
       if (!user.validPassword(password)) {
         return done(null, false, { message: 'Incorrect password.' });
       }
       return done(null, user);
     });
   }
 ));

passport.serializeUser(function(user, done) {
   done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
   done(err, user);
   });
});

// Getting User Basic Info - AUTHORIZED routes
router.route("/")
   .get(userController.getUser)
   .post(userController.create);

// router.route("/:id")
//    .get(userController.findById);

router.post('/user', userController.validateToken, userController.getUser);
router.post('/login', userController, passport.authenticate('local'), userController.authenticate);
router.post(userController.logout);
router.post(userController.signup);

// API GET/POST ROUTES

module.exports = router;