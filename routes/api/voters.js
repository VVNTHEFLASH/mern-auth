// const express = require("express");
// const routerTwo = express.Router();
// const keys = require("../../config/keys");

// //model
// const User = require("../../models/User");

// routerTwo.route("/users/:id").put((req, res) => {
//     User.findById(req.params.id)
//         .then(result => {
//             result.votedParty = req.body.votedParty;
//             result.voteStatus = req.body.voteStatus;
//             // result.date = Date.parse(req.body.date);
//             console.log("Request Success & Data will be saved in database")
//             result.save()
//             .then(vote => res.json(vote))
//             .catch(err => res.status(400).json("Error: "+err));
//         })
//         .catch(err => res.status(400).json("Error: "+err));
// });

module.exports = routerTwo;
