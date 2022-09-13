// Require Express
const express = require('express');



// Require and initialise dotenv
require('dotenv').config();

const flash = require ('connect-flash');

// Require Mongoose
const mongoose = require('mongoose')

// PORT Configuration
const PORT = process.env.PORT;

// Initialise Express application
const app = express();

// Using Connect Flash
app.use(flash())

// looking for static files in Public folder
app.use(express.static("public"));


// Require express-ejs-layouts dependancy
const expressLayouts = require('express-ejs-layouts');


//image
// const imageRouter = require('./routes/images');

//  Import Routes below
const indexRouter = require('./routes/index');
const athleteRouter = require('./routes/athletes');
const coachRouter = require('./routes/coaches');
const regionRouter = require('./routes/regions');
const clubRouter = require('./routes/clubs');
const eventRouter = require('./routes/events');
const authRouter = require('./routes/auth');


 
app.use(expressLayouts);

let session = require('express-session');
let passport = require ('./helper/ppConfig')


app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 3600000}
}))

// Initialze passport and passport session
app.use(passport.initialize());
app.use(passport.session());


// Sharing the information with all pages
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.alerts = req.flash();
    next();
})

// Mount Routes
app.use('/', indexRouter);
app.use('/', athleteRouter);
app.use('/', coachRouter);
app.use("/", regionRouter);
app.use('/', clubRouter);
app.use('/', eventRouter);
app.use('/', authRouter);




app.set("view engine", "ejs");



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
 