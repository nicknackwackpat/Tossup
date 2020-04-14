const mongoose = require("mongoose");
const db = require("../models");

require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/project3", {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const election = [
    {
        candidate = [
            {
                name: "bill",
                color: "Green",
                vote: 0
            },
            {
                name: "Jon",
                color: "Red",
                votes: 0
            },
            results = [
                {
                    name: NY,
                    votes: 0
                },
                {
                    name: Boston,
                    votes: 0
                }
            ]
        ]
    }
]
 

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
