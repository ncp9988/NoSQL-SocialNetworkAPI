const router = require("express").Router();


router.use("/api/users", require("./user-routes"));

module.exports = router;