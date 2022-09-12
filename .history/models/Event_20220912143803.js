const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    nameEvent: String,
    emailAddressEvent: String,
    gender: String,
    dateOfBirth: Date,
    // photo: Insert photo later
    athlete: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Athlete",
        },
      ],
    region: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Region"
        },
},
{timestamps: true})

const Event = mongoose.model("Event", eventSchema);

module.exports = {Event}