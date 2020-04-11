const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const passportLocalMongoose = require('passport-local-mongoose');

=======
// const passportLocalMongoose = require('passport-local-mongoose');
 
>>>>>>> 19f5c7be9d18862529c809290f836a1b8d6409e0
const userSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
<<<<<<< HEAD
  state: {
    type: String,
    trim: true,
    required: "States is Required"
  },

  username: {
=======
  email: {
>>>>>>> 19f5c7be9d18862529c809290f836a1b8d6409e0
    type: String,
    trim: true,
    required: "Email is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  userCreated: {
    type: Date,
    default: Date.now
  },

<<<<<<< HEAD
  candidate1: String,
  candidate2: String,
  color: String
=======
  // candidate1:  String,
  // candidate2:  String ,
  // color: String
>>>>>>> 19f5c7be9d18862529c809290f836a1b8d6409e0

});


const User = mongoose.model("User", userSchema);

module.exports = User;