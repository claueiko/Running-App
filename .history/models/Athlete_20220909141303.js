const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    gender: String,
    dateOfBirth: Date,
    region: String,
    // photo: Insert photo later
    club: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    }],
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    coach: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    }]
},
{timestamps: true})

const Runner = mongoose.model("Runner", runnerSchema);

module.exports = {Runner}