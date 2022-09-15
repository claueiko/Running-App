// Require Athlete Model
const {Athlete} = require('../models/Athlete')
// const {Coach} = require('../models/Coach')
// const {Club} = require('../models/Club')
// const {Event} = require('../models/Event')

// Require Moment Library
const moment = require('moment');

// CRUD

// CREATE
// HTTP GET - Load Athlete from

exports.athlete_create_get = (req, res) => {
    res.render('athlete/add')
}

// HTTP POST - Athlete
exports.athlete_create_post = (req, res) => {
    // console.log(req.body);
    // res.send ("Post Works!!!!!!!!")

    // Saving the data into the Database 
// line 21 means that whatever has been created in localhost:4001/athlete/add
    let athlete = new Athlete(req.body);

    athlete.save()
    .then(() => {
        res.redirect("/athlete/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!");
    })
}

// HTTP GET - Athlete Index API
exports.athlete_index_get = (req, res) => {
    Athlete.find()
    .then(athletes => {
        res.render("athlete/index", {athletes, moment}) //
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Athlete by ID
exports.athlete_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the athlete by ID
    Athlete.findById(req.query.id).populate('race')
    .then(athlete => {
        res.render("athlete/detail", {athlete, moment})
    })
    .catch(err => {
        console.log(err);
    })

}

// HTTP DELETE - Athlete
exports.athlete_delete_get = (req, res) => {
    console.log(req.query.id);

    Athlete.findByIdAndDelete(req.query.id)
    .then(athlete => {
        res.redirect("/athlete/index")
    })
    .catch(err => {
        console.log(err);
    })
}

// EDIT API

// HTTP GET - Load Athlete Edit Form
exports.athlete_edit_get = (req, res) => {
    Athlete.findById(req.query.id)
    .then((athlete) => {
        res.render("athlete/edit", {athlete})
    })
    .catch(err => {
        console.log(err);
        })
}

// HTTP PUT - Athlete Update 
exports.athlete_update_put = (req, res) => {
    console.log(req.body.id);

    Athlete.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/athlete/index")
    })
    .catch(err => {
        console.log(err)
    })
}