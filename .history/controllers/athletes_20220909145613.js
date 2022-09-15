// Require Runner Model
const {Athlete} = require('../models/Athlete')
// const {Coach} = require('../models/Coach')
// const {Club} = require('../models/Club')
// const {Event} = require('../models/Event')

// Require Moment Library
const moment = require('moment');

// APIs for Runners

// CRUD

// CREATE
// HTTP GET - Load Runner from

exports.runner_create_get = (req, res) => {
    res.render('runner/add')
}

// HTTP POST - Runner
exports.runner_create_post = (req, res) => {
    // console.log(req.body);
    // res.send ("Post Works!!!!!!!!")

    // Saving the data into the Database 
// line 21 means that whatever has been created in localhost:4001/runner/add
    let runner = new Runner(req.body);

    runner.save()
    .then(() => {
        res.redirect("/runner/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!");
    })
}

// HTTP GET - Runner Index API
exports.runner_index_get = (req, res) => {
    Runner.find()
    .then(runners => {
        res.render("runner/index", {runners, moment}) //
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Runner by ID
exports.runner_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the runner by ID
    Runner.findById(req.query.id).populate('race')
    .then(runner => {
        res.render("runner/detail", {runner, moment})
    })
    .catch(err => {
        console.log(err);
    })

}

// HTTP DELETE - Runner
exports.runner_delete_get = (req, res) => {
    console.log(req.query.id);

    Runner.findByIdAndDelete(req.query.id)
    .then(runner => {
        res.redirect("/runner/index")
    })
    .catch(err => {
        console.log(err);
    })
}

// EDIT API

// HTTP GET - Load Runner Edit Form
exports.runner_edit_get = (req, res) => {
    Runner.findById(req.query.id)
    .then((runner) => {
        res.render("runner/edit", {runner})
    })
    .catch(err => {
        console.log(err);
        })
}

// HTTP PUT - Runner Update 
exports.runner_update_put = (req, res) => {
    console.log(req.body.id);

    Runner.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/runner/index")
    })
    .catch(err => {
        console.log(err)
    })
}