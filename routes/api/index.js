const router = require("./node_modules/express").Router();
const userRoutes = require("./user");
const electionRoutes = require("./election");

router.use("/user", userRoutes);
router.use("/election", electionRoutes);

module.exports = router;
