const mongoose = require('mongoose')

const runnerSchema = mongoose.Schema({
    name: String,
    emailAddress: String,
    club: String,
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
},
{timestamps: true})

const Runner = mongoose.model("Runner", runnerSchema);