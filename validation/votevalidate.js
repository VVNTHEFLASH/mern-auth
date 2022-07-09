const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateVoteStatus(data) {
    let errors = {};
    data.votedParty = !isEmpty(data.votedParty) ? data.votedParty : ""

    return {
        errors,
        isValid: isEmpty(errors)
    }
} 