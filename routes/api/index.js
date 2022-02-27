const router = require("express").Router();
const userRoutes = require('./user-routes');

router.use("/api/users", require("./user-routes"));

module.exports = router;