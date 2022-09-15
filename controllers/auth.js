// require user model
const User = require('../models/User');

// Require Passport Configurations
let passport = require("../helper/ppConfig");

// Require bcrypt for hasing
const bcrypt = require('bcrypt');
const salt = 10;

// APIs for user registration and authentication here - see models User.js

// HTTP GET - Signup Route - To load the signup form
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}
// HTTP Post - Signup Route - To post the data into the database
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    console.log(req.body.password);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    user.password = hash;

    user.save()
    .then(() => {
        //THIS TO REDIRECT TO COACH OR ATHLETE AFTER SIGNUP
        res.redirect("/coach/add");
    })
    .catch((err) => {
        console.log(err)
        res.send("Line 33 please try again later.")
    })
}
// HTTP GET - Signin Route - To load the signin form
exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");
}

// HTTP POST - Signin Route - To post the data for authentication
exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/auth/signin"
})

// HTTP GET - Logout Route - To logout the user
exports.auth_logout_get = (req, res) => {
    // This Invalidates the session
    req.logout(function(err) {
        if(err) {return next(err);}
        req.flash("success", "You are logged out successfully")
        res.redirect("/auth/signin");
    })
}