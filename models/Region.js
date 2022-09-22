const mongoose = require("mongoose");

// Schema for Region Model:
const regionSchema = mongoose.Schema({
  nameRegion: String,
});

// Model for Region for Region Schema
const Region = mongoose.model("Region", regionSchema);

// Exports statements (to other files)
module.exports = { Region };
