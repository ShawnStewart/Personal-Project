const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const validateRegisterInput = require("../../validation/register");

// @route   GET api/users/test
// @desc    Tests users route
// @acess   Public
router.get("/test", (req, res) => res.json({ msg: "Users route working" }));

// @route   POST api/users/register
// @desc    Registers new user
// @acess   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Validation Check
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        return res.status(400).json({ username: "Username already exists" });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200",
          r: "r",
          d: "mm"
        });

        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(11, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log("err :("));
});

module.exports = router;
