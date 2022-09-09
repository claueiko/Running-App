// Require Express
const express = require('express')

// Require Mongoose
const mongoose = require('mongoose')

const PORT = process.env.PORT;

const app = express();

mongoose.connect(process.env.MongoDBURL, 
    { useNewURLParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected :)")
    }
);
