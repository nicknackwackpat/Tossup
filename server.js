//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// requires the model with Passport-Local Mongoose plugged in

 

const User = require('./models/user');
const Map = require('./models/map');

// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));
 
// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
