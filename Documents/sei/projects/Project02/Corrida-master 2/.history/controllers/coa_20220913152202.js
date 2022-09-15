// require user model
const UserCoach = require('../models/UserCoach');

// Require Passport Configurations
let passport = require("../helper/ppConfig");

// Require bcrypt for hasing
const bcrypt = require('bcrypt');
const salt = 10;

// APIs for user registration and coaentication here - see models User.js

// HTTP GET - Signup Route - To load the signup form
exports.coa_signup_get = (req, res) => {
    res.render("coa/signup");
}
// HTTP Post - Signup Route - To post the data into the database
exports.coa_signup_post = (req, res) => {
    let userCoach = new UserCoach(req.body);

    console.log(req.body.password);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    userCoach.password = hash;

    userCoach.save()
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => {
        console.log(err)
        res.send("Please try again later.")
    })
}
// HTTP GET - Signin Route - To load the signin form
exports.coa_signin_get = (req, res) => {
    res.render("coa/signin");
}

// HTTP POST - Signin Route - To post the data for coaentication
exports.coa_signin_post = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/coa/signin"
})

// HTTP GET - Logout Route - To logout the user
exports.coa_logout_get = (req, res) => {
    // This Invalidates the session
    req.logout(function(err) {
        if(err) {return next(err);}
        req.flash("success", "You are logged out successfully")
        res.redirect("/coa/signin");
    })
}