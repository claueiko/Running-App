// Require Express
const express = require('express');

// Require and initialise dotenv
require('dotenv').config();

//LIVE SEARCH
const cors = require("cors")

const flash = require ('connect-flash');

// Require Mongoose
const mongoose = require('mongoose')

// PORT Configuration
const PORT = process.env.PORT;

// Initialise Express application
const app = express();

// LIVE SEARCH
app.use(cors());

// Using Connect Flash
// app.use(flash())

// Require express-ejs-layouts dependancy
//  Import Routes below

// Look into views folder for layouts page

mongoose.connect(process.env.MongoDBURL, 
    { useNewURLParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected :)")
    }
);



app.listen(PORT, () => {
    console.log(`Corrida is running on PORT ${PORT}`);
});
 