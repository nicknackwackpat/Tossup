const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

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
  email: {
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

  elections:[{
    type: Schema.Types.ObjectId,
    ref: "Election"
  }],

  userCreated: {
    type: Date,
    default: Date.now
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;