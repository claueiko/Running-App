// Require Models
const { Event } = require("../models/Event");
const { Athlete } = require("../models/Athlete");
const { Coach } = require("../models/Coach");
const { Region } = require("../models/Region");
// const Event = require("../models/Event").Event;

// Require Moment Library
const moment = require('moment');

// APIs for Events

// CRUD

// CREATE
// HTTP GET - Load Event From
exports.event_create_get = (req, res) => {
    // res.render("event/add");
        Region.find()
        .then((regions) => {
                res.render("event/add", { coaches, regions, athletes })
        })
        .catch((err) => {
            console.log(err);
        })
    
    .catch((err) => {
        console.log(err);
    })
}

// HTTP POST - Event
exports.event_create_post = (req, res) => {
    // console.log(req.body);
    // res.send("POST WORKS!!!!");

    // Saving the data into the Database

    let event = new Event(req.body);

    event.save()
    .then(() => {
        // oneToMany
        res.redirect("/event/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!!");
    })

    // Embedded Design Model
    // Coach.findById(req.body.coache, 
    //     (error, coache) => {
    //         coache.event.push(event);
    //         coache.save();
    //         res.redirect("/coache/index");
    // })
}


// HTTP GET - Event Index API - We will need to write, 'club' on line 63 at the end of 'coach'.
exports.event_index_get = (req, res) => {
    Event.find().populate('region').populate('athlete')
    .then(events => {
        res.render("event/index", {events: events, moment}) // events: events, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Event By Id
exports.event_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the event by ID
    Event.findById(req.query.id)
    .populate('region', 'athlete')
    .then(event => {
        res.render("event/detail", {event, moment}) // event: event, moment: moment
    }) 
    .catch(err => {
        console.log(err)
    })
}


// HTTP DELETE - Event
exports.event_delete_get = (req, res) => {
    console.log(req.query.id);

    Event.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/event/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

// HTTP GET - Load Event Edit Form
exports.event_edit_get = (req, res) => {
    Event.findById(req.query.id)
    .then((event) => {
        res.render("event/edit", {event})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Event Update
exports.event_update_put = (req, res) => {
    console.log(req.body.id);

    Event.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/event/index");
    })
    .catch(err => {
        console.log(err)
    })
}
