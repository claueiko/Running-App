const mongoose = require("mongoose");

// Schema for Coach Model:
const clubSchema = mongoose.Schema(
  {
    nameClub: String,
    emailAddressClub: String,
    clubWebsite: String,
    address: String,
    athlete: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Athlete",
      },
    ],
    coach: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    }],
  },
  { timestamps: true }
);

// Model for Coach for Coach Schema
const Club = mongoose.model("Club", clubSchema);

// Exports statements (to other files)
module.exports = { Club };
