const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    club: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    }]
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
},
{timestamps: true})

const Runner = mongoose.model("Runner", runnerSchema);