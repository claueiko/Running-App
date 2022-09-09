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

// looking for static files in Public folder
app.use(express.static("public"));

// Require express-ejs-layouts dependancy
const expressLayouts = require('express-ejs-layouts');

//  Import Routes below
const indexRouter = require('./routes/index');
const athleteRouter = require('./routes/athletes');
const coachRouter = require('./routes/coaches');

app.use(expressLayouts);





// Mount Routes
app.use('/', indexRouter);
app.use('/', athleteRouter);
app.use('/', coachRouter);




app.set("view engine", "ejs");




// Look into views folder for layouts page

mongoose.connect("mongodb://localhost:27017/corrida", 
    { useNewURLParser: true, useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected :)")
    }
);

app.listen(PORT, () => {
    console.log(`Corrida is running on PORT ${PORT}`);
});
