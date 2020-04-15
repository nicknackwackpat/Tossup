// const express = require('express');
const router = require("express").Router();
const userController = require("../../controllers/userController");
 const passport = require("passport")
//localhost:3001/api/user
// Getting User Basic Info - AUTHORIZED routes
 router.route("/")
   .get(userController.getUser)
   .post(userController.create);

   
router.route("/all")
   .get(userController.findAll);

   router.route("/:id")
   .get(userController.findById);


// router.post('login', userController.autho, passport.authenticate('local'), userController.authenticate);
// router.post(userController.logout);
// router.post(userController.register);

module.exports = router;