// Require Express
const express = require('express')

// Require and initialise dotenv


// Require Mongoose
const mongoose = require('mongoose')

// PORT Configuration
const PORT = 4008;

// Initialise Express application
const app = express();

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
