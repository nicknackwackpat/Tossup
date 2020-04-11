const mongoose = require("mongoose");
const db = require("../models");

require("dotenv").config();



mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);


const userSeed = [
    {
        firstName: "Jon"
    },
    {
        lastName: "Doe"
    },
    {
        email: "jon@jon.com"
    },
    {
        username: "test1"
    },
    {
        password: "cba"
    },
    

    {
        firstName: "Jon"
    },
    {
        lastName: "Doe"
    },
    {
        username: "test2"
    },
    {
        email: "ben@ben.com"
    },
    {
        username: "test1"
    },
    {
        password: "abc"
    },


];

 db.User


    // .remove({})
    // .then(() => db.User.collection.insertMany(userSeed))
    // .then(data => {
    //     console.log(data.result.n + " records inserted!");
    //     process.exit(0);
    // })
    // .catch(err => {
    //     console.error(err);
    //     process.exit(1);
    // });