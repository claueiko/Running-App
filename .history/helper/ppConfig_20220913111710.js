// Require Passport
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

// Require User Model
const UserAthlete = require("../models/UserAthlete");

// Serialize User
// Save the data into the session
// Unique Identifier
passport.serializeUser(function(userAthlete, done){
    done(null, userAthlete.id)
});

// DeSerialize User
// Reading the information from the database according to the ID from Session
passport.deserializeUser(function(id, done) {
    UserAthlete.findById(id, function(err, userAthlete){
        done(err, userAthlete);
    });
});

passport.use(new LocalStrategy({
    usernameField: "emailAddress", 
    passwordField: "password"
},
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, userAthlete) {
        if (err) { return done(err); }
        if (!userAthlete) { return done(null, false); }
        if (!userAthlete.verifyPassword(password)) { return done(null, false); }
        return done(null, userAthlete);
      });
    }
  ));

// Export Passport Middleware 
module.exports = passport