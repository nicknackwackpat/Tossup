const router = require("express").Router();
const userRoutes = require("./user");

// localhost:3001/api routes
router.use("/user", userRoutes);

module.exports = router;
