// Require Express
const express = require('express')

// Require Mongoose
const mongoose = require('mongoose')

// PORT Configuration
const PORT = process.env.PORT;

// Initialise Express application
const app = express();

// Using Connect Flash
// app.use(flash())

mongoose.connect(process.env.MongoDBURL, 
    { useNewURLParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected :)")
    }
);

app.listen(PORT, () => {
    console.log(`Corrida is running on PORT ${PORT}`);
});
