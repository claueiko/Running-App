const { Coach } = require("../models/Coach");
const { TrainingPlan } = require("../models/TrainingPlan");

// Require Moment Library
const moment = require('moment');

// APIs for Coachs

// CRUD

// CREATE

// // HTTP GET - PERFORMANCE

exports.coach_performance_get = (req, res) => {
    Coach.findById(req.query.id)
    .then((coach) => {
        Performance.find()
        .then((performances) => {
            res.render("coach/details", {coach, performances})
        })
        .catch(err => {
            console.log(err);
    })
    })
}

// HTTP POST - PERFORMANCE
exports.coach_performance_post = (req, res) => {
    console.log(req.query.id);

    let performance = new Performance(req.body);
    performance
    .save()
    .then((coach) => {
        Performance.findById(req.body.performance)
        .then((performance) => {
            performance.coach.push(coach)
            performance.save()
        })
    res.redirect("/coach/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later coachs controller line 115");
    });
};
