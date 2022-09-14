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
    .then((athletes) => {
        Performance.find()
        .then((performances) => {
            res.render("athlete/details", {athletes, performances})
        })
        .catch(err => {
            console.log(err);
    })
    })
}

// HTTP POST - PERFORMANCE
exports.athlete_performance_post = (req, res) => {
    console.log(req.query.athleteId);

    let performance = new Performance(req.body);
    performance
    .save()
    .then((performance) => {
        Athlete.findById(req.body.athleteId)
        .then((athlete) => {
            athlete.performance.push(performance)
            athlete.save()
        })
    res.redirect("back");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later athletes controller line 115");
    });
};
