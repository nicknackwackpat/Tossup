const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({

stateAbbreviation: {
  type: String, 
  required: true
},
state: {
    type: String,
    trim: true,
    required: "States is Required"
  },
  
  votercount: Number,
  color: String

});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
