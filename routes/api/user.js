const router = require("express").Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");
const keys = require("../../config/keys");
const validateRegistration = require("../../validation/register");
const validateLogin = require("../../validation/login");

// @route   GET api/users/test
// @desc    Tests users route
// @acess   Public
router.get("/test", (req, res) => res.json({ msg: "Users route working" }));

// @route   POST api/users/register
// @desc    Registers new user
// @acess   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);

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

// @route   POST api/users/login
// @desc    Login user and return JWT
// @acess   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Validation Check
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      errors.username = "Username not found";
      res.status(404).json(errors);
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // Successful login creating token
        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        jwt.sign(
          payload,
          keys.jwtSecret,
          { expiresIn: "10h" },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Gets the current user
// @acess   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      username: req.user.username,
      email: req.user.email,
      avatar: req.user.avatar,
      friends: req.user.friends,
      date: req.user.date
    });
  }
);

// @route   GET api/users/:username
// @desc    Gets a user by username
// @acess   public
router.get("/:username", (req, res) => {
  const errors = {};

  User.findOne({ username: req.params.username })
    .then(user => {
      if (!user) {
        errors.noprofile = "Sorry, that username does not exist!";
        res.status(404).json(errors);
      }

      res.json(user);
    })
    .catch(() => {
      errors.noprofile = "Sorry, that username does not exist!";
      res.status(404).json(errors);
    });
});

module.exports = router;
