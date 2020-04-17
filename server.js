//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
// const morgan = require("./morgan")
const bodyParser = require("body-parser")
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express();
const PORT = process.env.PORT || 3001;

// requires the model with Passport-Local Mongoose plugged in
// const User = require('./models/user');
// const Map = require('./models/map');
// const Election = require('./models/election');


// Define middleware here
// app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/src"));
}
// Add routes, both API and view
app.use(routes);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/src/index.html"));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});