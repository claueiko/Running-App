const mongoose = require('mongoose')

const athleteSchema = mongoose.Schema({
    nameAthlete: String,
    emailAddress: String,
    gender: String,
    dateOfBirth: Date,
    // photo: Insert photo later
    club: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    }],
    coach: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    }],
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    region: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Region"
        },
    ]
},
{timestamps: true})

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = {Athlete}