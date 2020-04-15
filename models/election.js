const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// {
//     stateID: 'WY',
//     totalPopulation: 578759,
//     Nick: 80259,
//     Joe: 400745,
//     Amy: 60181,
//     Nelson: 15569
//   }

// const passportLocalMongoose = require('passport-local-mongoose');

const electionSchema = new Schema({
    stateID: String,
    totalPopulation: Number,
        candidates: [{
            name: String,
            voteTotal: Number
        }],
    });
    
    const Election = mongoose.model("Election", electionSchema);


module.exports = Election;