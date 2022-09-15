const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    nameEvent: String,
    emailAddressEvent: String,
    dateEvent: Date,
    addressEvent: String,
    linkEvent: String,
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