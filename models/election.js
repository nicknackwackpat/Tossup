const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

const electionSchema = new Schema({

    candidatename: {
      type: String, 
      required: true

    },
      electionstate: Number,
      color: String
    
    });
    
    const Election = mongoose.model("Election", electionSchema);


module.exports = Election;