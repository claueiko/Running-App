const { Coach } = require("../models/Coach");
const { TrainingPlan } = require("../models/TrainingPlan");

// Require Moment Library
const moment = require("moment");

// APIs for Coachs

// CRUD

// CREATE

// // HTTP GET - PERFORMANCE

exports.coach_trainingPlan_get = (req, res) => {
  Coach.findById(req.query.id).then((coaches) => {
    TrainingPlan.find()
      .then((trainingPlans) => {
        res.render("coach/details", { coaches, trainingPlans });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// HTTP POST - TRAINING PLAN
exports.coach_trainingPlan_post = (req, res) => {
  console.log(req.query.coachId);

  let trainingPlan = new TrainingPlan(req.body);
  trainingPlan
    .save()
    .then((trainingPlan) => {
      Coach.findById(req.body.coachId)
      .then((coach) => {
        coach.trainingPlan.push(trainingPlan);
        coach.save();
      });
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
      res.send("Try again later coaches controller line 45");
    });
};

// HTTP DELETE TRAINING PLAN:
exports.trainingPlan_delete_get = (req, res) => {
  console.log(req.query.id);

  TrainingPlan.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};
