const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const { countDocuments } = require("../../models/User");

// route put by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false
  }).then(() => {
    res.send({ votedParty: req.body.votedParty, voteStatus: req.body.voteStatus })
    console.log("Updated")
  })
})
//route get api/users/
router.get("/", (req,res) => {

  User.estimatedDocumentCount({}).then(count => {
    res.json(count)
    console.log(`Total Candidates: ${count}`)
  }).catch(err => console.log(err))









})

router.get("/dmk", (req, res) => {
  User.find({ votedParty: "DMK"}).countDocuments().then(dmkCount => {
    console.log(`DMK Vote Count ${dmkCount}`)
    res.json(dmkCount)
  }).catch(err => console.log(err))
})

router.get("/admk", (req, res) => {
  User.find({ votedParty: "ADMK"}).countDocuments().then(admkCount => {
    console.log(`ADMK Vote Count ${admkCount}`)
    res.json(admkCount)
  }).catch(err => console.log(err))
})

router.get("/bjp", (req, res) => {
  User.find({ votedParty: "BJP"}).countDocuments().then(bjpCount => {
    console.log(`BJP Vote Count ${bjpCount}`)
    res.json(bjpCount)
  }).catch(err => console.log(err))
})

router.get("/nota", (req, res) => {
  User.find({ votedParty: "NOTA"}).countDocuments().then(notaCount => {
    console.log(`NOTA Vote Count ${notaCount}`)
    res.json(notaCount)
  }).catch(err => console.log(err))
})

router.get("/nv", (req, res) => {
  User.find({ votedParty: "NV"}).countDocuments().then(nvCount => {
    console.log(`Not-Voted Count ${nvCount}`)
    res.json(nvCount)
  }).catch(err => console.log(err))
})


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        votedParty: "NV",
        voteStatus: false,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
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
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
