const db = require("../models");

// Defining methods for the electionController
module.exports = {
    create: function(req, res) {
        db.Election
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findAll: function(req, res) {
        console.log(req.query)
        db.Election
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            console.log(err)
            res.status(422).json(err)});
      },
}

// Find All candidates?
  // findAll: function(req, res) {
  //   db.Candidate
  //     .find(req.query)
  //     .populate("elections")
  //     .sort({ lastName: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },