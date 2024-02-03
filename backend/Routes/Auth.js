const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../Middleware/fetchuser");

require('dotenv').config();

const SecretKey = process.env.SECURITY;
// const SecretKey = "kdghelaniiii";
// console.log(SecretKey);

//Route 1 : Create a new user
router.post(
  "/createuser",
  [
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail()
  ],
  async (req, res) => {
    console.log(req.body);

    //Used for the validation
    const error = validationResult(req);
    let success = false;

    if (!error.isEmpty()) {
      return res.status(400).json({ success, errors: error.array() });
    }

    //Check whether the user with the same email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.json({
          success, error: "Sorry a user with same email already exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //check whether user already exists or not
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // .then(user => res.json(user))
      // .catch(err => res.json({Message: err.message}))
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, SecretKey);
      success =true;
      res.json({ success, authToken });

      // res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 2 : Authentication of user
router.post(
  "/login",
  [
    body("password", "Password cannot be null").exists(),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({email});

      let success = false;
      if (!user) {
        return res.status(400).json({ Message: "Please enter correct email or password" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({ Message: "Please enter correct email or password" });
      }

      const data = {
        user: {
          id: user.id,
        }
      };
      const authToken = jwt.sign(data, SecretKey);
      success = true;
      res.json({ success, authToken });

    } catch (error) {
      console.log(error.message);
      res.status(500).send({error: error.message});
    }
  }
);

//Route 3 : Get logged in user details
router.post(
  "/getuser", fetchuser,  
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  })

module.exports = router;
