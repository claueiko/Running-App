
const mongoose = require("mongoose");

// Schema for Coach Model:
const coachSchema = mongoose.Schema(
  {
    nameCoach: String,
    emailAddressCoach: String,
    phoneNumber: String,
    region: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Region"
        },
    
    club: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club",
      },
    ],
    athlete: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Athlete",
      },
    ],
    trainingPlan: String,
  },
  { timestamps: true }
);

// Model for Coach for Coach Schema
const Coach = mongoose.model("Coach", coachSchema);

// Exports statements (to other files)
module.exports = { Coach };
