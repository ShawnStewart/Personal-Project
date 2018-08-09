const router = require("express").Router();
const gravatar = require("gravatar");

const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @acess   Public
router.get("/test", (req, res) => res.json({ msg: "Users route working" }));

module.exports = router;
