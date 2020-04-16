const router = require("express").Router();
const userRoutes = require("./user");
const electionRoutes = require("./election");

router.use("/user", userRoutes);
router.use("/election", electionRoutes);

module.exports = router;
