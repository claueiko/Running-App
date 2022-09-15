// Require Models
const {Athlete} = require("../models/Athlete");
const {Coach} = require("../models/Coach");
// const Athlete = require("../models/Athlete").Athlete;

// Require Moment Library
const moment = require('moment');

// APIs for Athletes

// CRUD

// CREATE
// HTTP GET - Load Athlete From
exports.athlete_create_get = (req, res) => {
    // res.render("athlete/add");
    Coach.find()
    .then((coaches) => {
        res.render("athlete/add", {coaches})
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP POST - Athlete
exports.athlete_create_post = (req, res) => {
    // console.log(req.body);
    // res.send("POST WORKS!!!!");

    // Saving the data into the Database

    let athlete = new Athlete(req.body);

    athlete.save()
    .then(() => {


        // M2MR
        req.body.coache.forEach(coache => {
            Coach.findById(coache, (error, coache) => {
                coache.athlete.push(athlete);
                coache.save();
            })
        });
        res.redirect("/athlete/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!!");
    })

    // Embedded Design Model
    // Coach.findById(req.body.coache, 
    //     (error, coache) => {
    //         coache.athlete.push(athlete);
    //         coache.save();
    //         res.redirect("/coache/index");
    // })
}


// HTTP GET - Athlete Index API
exports.athlete_index_get = (req, res) => {
    Athlete.find().populate('coache')
    .then(athletes => {
        res.render("athlete/index", {athletes: athletes, moment}) // athletes: athletes, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Athlete By Id
exports.athlete_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the athlete by ID
    Athlete.findById(req.query.id).populate('coache')
    .then(athlete => {
        res.render("athlete/detail", {athlete, moment}) // athlete: athlete, moment: moment
    })
    .catch(err => {
        console.log(err)
    })
}


// HTTP DELETE - Athlete
exports.athlete_delete_get = (req, res) => {
    console.log(req.query.id);

    Athlete.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/athlete/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

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
        res.redirect("/athlete/index");
    })
    .catch(err => {
        console.log(err)
    })
}
