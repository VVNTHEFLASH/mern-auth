const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for Vote 
const VoteSchema = new Schema({
    VotedParty:{
        type: String,
        required: true
    },
    VoteStatus: {
        type: Boolean,
        required: false
    }
})

module.exports = Voter = mongoose.model("users", VoteSchema)