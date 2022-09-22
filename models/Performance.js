const mongoose = require("mongoose");

const performanceSchema = mongoose.Schema({
  nameActivity: String,
  timeActivity: String,
  distanceActivity: String,
  locationActivity: String,
  dateActivity: Date,
});

const Performance = mongoose.model("Performance", performanceSchema);
module.exports = { Performance };
