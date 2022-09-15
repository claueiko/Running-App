const mongoose = require("mongoose");

// Schema for Club Model:
const clubSchema = mongoose.Schema(
  {
    nameClub: String,
    emailAddressClub: String,
    websiteClub: String,
    region: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Region"
        },
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

// Model for Club for Club Schema
const Club = mongoose.model("Club", clubSchema);

// Exports statements (to other files)
module.exports = { Club };
