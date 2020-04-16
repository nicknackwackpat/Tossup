const router = require("express").Router();
const electionController = require("../../server/controllers/electionController");

// Matches with "/api/election"
router.route("/")
  .get(electionController.findAll)
  .post(electionController.create);

  module.exports = router;