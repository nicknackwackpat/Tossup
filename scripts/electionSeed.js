const mongoose = require("mongoose");
const db = require("../models");
const data = require("../client/src/components/Map/data/us-states.json")

const candidateArray = ["Amy", "Joe", "Nelson", "Nick"];


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
function vote(candidateArr){
const dummy=[]
//console.log(data);

for (state in data){
    let newState={}
    const stateID = data[state].abbreviation
    newState.stateID=stateID
    let totalPopulation = data[state].population
    newState.totalPopulation=totalPopulation
    shuffle(candidateArr)
    candidateArr.forEach(candidate=>{
        newState[candidate]= Math.floor(Math.random() * totalPopulation)
        totalPopulation-=newState[candidate]
    })
    dummy.push(newState)
};

console.log(dummy)
}
vote(candidateArray)

// vote(["Predator", "Alien", "Trump"])
// require("dotenv").config();
// election={
//     date: datetime,
//     user: "",
//     result= [dummy]
// }

// mongoose.connect(
//     process.env.MONGODB_URI || 
//     "mongodb://localhost/project3", {
//         useNewUrlParser: true,
//         useFindAndModify: false
//     }
// );

// const election = [
//     {
//         candidate = [
//             {
//                 name: "bill",
//                 color: "Green",
//                 vote: 0
//             },
//             {
//                 name: "Jon",
//                 color: "Red",
//                 votes: 0
//             },
//             results = [
//                 {
//                     name: NY,
//                     votes: 0
//                 },
//                 {
//                     name: Boston,
//                     votes: 0
//                 }
//             ]
//         ]
//     }
// ]
 

//  db.Election.deleteMany({})
//     .then(() => db.Election.collection.insertMany(electionSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
