const router = require("express").Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thougth-routes');

router.use("/api/users", require("./user-routes"));
router.use("/api/thoughts", require("./thougth-routes"));

module.exports = router;