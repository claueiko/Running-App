const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
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
    region: String,
},
{timestamps: true})

const Runner = mongoose.model("Runner", runnerSchema);

module.exports = {Runner}
