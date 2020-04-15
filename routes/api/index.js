const router = require("express").Router();
const userRoutes = require("./user");
const electionRoutes = require("./election");

// localhost:3001/api routes
router.use("/user", userRoutes);
router.use("/election", electionRoutes);

module.exports = router;
