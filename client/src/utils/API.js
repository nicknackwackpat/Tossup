import axios from "axios";

export default {
// USER ROUTES INCLUDING AUTHENTICATION

// CREATE USER
// router.post('/user');

// AUTHENTICATION ROUTE - RUNS PASSPORT
login: function(email, password) {
  return axios.post("/api/user/login");
},
// This syntax comes from Passport...not sure we need it.
// req.login(user, function(err) {
//   if (err) { return next(err); }
//   return res.redirect('/users/' + req.user.username);
// });

// LOGOUT ROUTE
logout: function() {
  return axios.post("/api/user/logout");
},

// SIGN UP ROUTE
signup: function() {
  return axios.post("/api/user/signup");
},

// ELECTION ROUTES
  // Gets all election votes
  getResults: function() {
    return axios.get("/api/election");
  },
  // Gets the election results with the given id
  getResult: function(id) {
    return axios.get("/api/election/" + id);
  }

// CANDIDATE ROUTES; NEED TO ADD BACKEND
// router.route("/all")
//    .get(userController.findAll);

// router.route("/:id")
//    .get(userController.findById);
}