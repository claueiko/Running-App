const { Athlete } = require("../models/Athlete");
const { Performance } = require("../models/Performance");

// Require Moment Library
const moment = require('moment');

// APIs for Athletes

// CRUD

// CREATE

// // HTTP GET - PERFORMANCE

exports.athlete_performance_get = (req, res) => {
    Athlete.findById(req.query.id)
    .then((athlete) => {
        Performance.find()
        .then((performances) => {
            res.render("athlete/details", {athlete, performances})
        })
        .catch(err => {
            console.log(err);
    })
    })
}

// HTTP POST - PERFORMANCE
exports.athlete_performance_post = (req, res) => {
    console.log(req.query.id);

    let performance = new Performance(req.body);
    performance
    .save()
    .then((athlete) => {
        Performance.findById(req.body.performance)
        .then((performance) => {
            performance.athlete.push(athlete)
            performance.save()
        })
    res.redirect("/athlete/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later athletes controller line 115");
    });
};
