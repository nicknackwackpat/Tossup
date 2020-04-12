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

const userSeed = [
{
        firstName: "Jon",
        lastName: "Doe",
        email: "jon@jon.com",
        password: "test123",
},
{
        firstName: "Jon",
        lastName: "Doe",
        email: "ben@ben.com",
        password: "test123",
}
];


 db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
