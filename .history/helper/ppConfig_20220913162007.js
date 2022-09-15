// Require Passport
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

// Require User Model
const UserAthlete = require("../models/UserAthlete");
const UserCoach = require("../models/UserCoach");

// Serialize User
// Save the data into the session
// Unique Identifier
passport.serializeUser(function(userAthlete, done){
    done(null, userAthlete.id)
});

passport.serializeUser(function(userCoach, done){
  done(null, userCoach.id)
});

// DeSerialize User
// Reading the information from the database according to the ID from Session
passport.deserializeUser(function(id, done) {
    UserAthlete.findById(id, function(err, userAthlete){
        done(err, userAthlete);
    });
});

passport.deserializeUser(function(id, done) {
  UserCoach.findById(id, function(err, userCoach){
      done(err, userCoach);
  });
});

passport.use(new LocalStrategy({
    usernameField: "emailAddress", 
    passwordField: "password"
},
    function(emailAddress, password, done) {
      UserAthlete.findOne({ emailAddress: emailAddress }, function (err, userAthlete) {
        if (err) { return done(err); }
        if (!userAthlete) { return done(null, false); }
        if (!userAthlete.verifyPassword(password)) { return done(null, false); }
        return done(null, userAthlete);
      });
    }
  ));

  passport.use(new LocalStrategy({
    usernameField: "emailAddressCoach", 
    passwordField: "passwordCoach"
},
    function(emailAddressCoach, passwordCoach, done) {
      UserCoach.findOne({ emailAddressCoach: emailAddressCoach }, function (err, userCoach) {
        if (err) { return done(err); }
        if (!userCoach) { return done(null, false); }
        if (!userCoach.verifyPassword(passwordCoach)) { return done(null, false); }
        return done(null, userCoach);
      });
    }
  ));

// Export Passport Middleware 
module.exports = passport