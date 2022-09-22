const mongoose = require("mongoose");

const trainingPlanSchema = mongoose.Schema({
  name: String,
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  sunday: String,
});

const TrainingPlan = mongoose.model("TrainingPlan", trainingPlanSchema);
module.exports = { TrainingPlan };
