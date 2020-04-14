const express = require('express');
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require(passport)

// Getting User Basic Info - AUTHORIZED routes
router.get('/user', userController.getUser)
router.post('login', userController.autho, passport.authenticate('local'), userController.authenticate);
router.post(userController.logout);
router.post(userController.register);

module.exports = router;