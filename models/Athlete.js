const mongoose = require("mongoose");

const athleteSchema = mongoose.Schema(
  {
    nameAthlete: String,
    emailAddress: String,
    gender: String,
    dateOfBirth: Date,
    // photo: Insert photo later
    image: {
      type: String,
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach",
    },
    performance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Performance",
      },
    ],
    region: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = { Athlete };
