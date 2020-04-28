const mongoose = require("mongoose");
const db = require("../models");
const data = require("../../client/src/components/Map/data/us-states.json")

const candidateArray = ["Amy", "Joe", "Nelson", "Nick"];

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://nicknackwackpat:Tossup123@ds161194.mlab.com:61194/heroku_kbcj2fj2", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const electionSeed = [];

function vote(candidateArr) {
    for (state in data) {
        let newState = {};
        const stateID = data[state].abbreviation;
        newState.stateID = stateID;
        let totalPopulation = data[state].population

        newState.totalPopulation = totalPopulation
        newState.candidates = [];

        shuffle(candidateArr)
        candidateArr.forEach((candidate, i) => {
            newState.candidates.push({
                name: candidate,
                voteTotal: Math.floor(Math.random() * totalPopulation)
            })
            totalPopulation -= newState.candidates[i].voteTotal
        })
        electionSeed.push(newState)
    };

    console.log(electionSeed.candidates)
}

vote(candidateArray)
 
  db.Election.deleteMany({})
     .then(() => db.Election.collection.insertMany(electionSeed))
    .then(data => {
         console.log(data.result.n + " records inserted!");    
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
