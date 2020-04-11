const router = require("express").Router();
const userRoutes = require("./user");

// localhost:30001/api routes
router.use("/user", userRoutes);

module.exports = router;
