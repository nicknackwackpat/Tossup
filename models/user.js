const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({


  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  candidate1:  String,
  candidate2:  String ,
  color: String

});

const User = mongoose.model("User", userSchema);

module.exports = User;