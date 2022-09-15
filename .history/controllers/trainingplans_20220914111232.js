const { Coach } = require("../models/Coach");
const { TrainingPlan } = require("../models/TrainingPlan");

// Require Moment Library
const moment = require('moment');

// APIs for Coachs

// CRUD

// CREATE

// // HTTP GET - PERFORMANCE

exports.coach_trainingPlan_get = (req, res) => {
    Coach.findById(req.query.id)
    .then((coach) => {
        TrainingPlan.find()
        .then((trainingPlans) => {
            res.render("coach/details", {coach, trainingPlans})
        })
        .catch(err => {
            console.log(err);
    })
    })
}

// HTTP POST - PERFORMANCE
exports.coach_trainingPlan_post = (req, res) => {
    console.log(req.query.id);

    let trainingPlan = new TrainingPlan(req.body);
    trainingPlan
    .save()
    .then((coach) => {
        TrainingPlan.findById(req.body.trainingPlan)
        .then((trainingPlan) => {
            trainingPlan.coach.push(coach)
            trainingPlan.save()
        })
    res.redirect("/coach/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again later coachs controller line 115");
    });
};
