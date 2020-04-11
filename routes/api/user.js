const router = require("express").Router();
const userController = require("../../controllers/userController");

//localhost:3000/api/map
// Matches with "/api/map"
router.route("/")

  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
