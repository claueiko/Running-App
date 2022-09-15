// Require Models
const { Athlete } = require("../models/Athlete");
const { Coach } = require("../models/Coach");
const { Region } = require("../models/Region");
const { Performance } = require("../models/Performance")
const { User } = require("../models/User")
// const Athlete = require("../models/Athlete").Athlete;

// Require Moment Library
const moment = require('moment');

// APIs for Athletes

// CRUD

// CREATE
// HTTP GET - Load Athlete From
exports.athlete_create_get = (req, res) => {
    // res.render("athlete/add");
    Coach.find()
    .then((coaches) => {
       
        Region.find()
        .then((regions) => {
            res.render("athlete/add", { coaches, regions })          
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

// HTTP POST - Athlete
exports.athlete_create_post = (req, res) => {
    // Saving the data into the Database
    //Images 
  console.log(req.file);
  let imagePath = '/uploads/' + req.file.filename;
  let athlete = new Athlete(req.body);
  athlete.image = imagePath;
  athlete
    .save()
    .then((athlete) => {
        Coach.findById(req.body.coach)
        .then((coach) => {
            coach.athlete.push(athlete)
            coach.save()
        })
      res.redirect("/athlete/index");
    }) // TRYING TO CONNECT USER TO ATHLETE

    .catch((err) => {
      console.log(err);
      res.send("Please write again later.");
    });
};


    
    // Embedded Design Model
    // Coach.findById(req.body.coache, 
    //     (error, coache) => {
    //         coache.athlete.push(athlete);
    //         coache.save();
    //         res.redirect("/coache/index");
    // })



// HTTP GET - Athlete Index API - We will need to write, 'club' on line 63 at the end of 'coach'.
exports.athlete_index_get = (req, res) => {
    Athlete.find().populate('region').populate('coach').populate('performance')
    .then(athletes => {
        res.render("athlete/index", {athletes: athletes, moment}) // athletes: athletes, moment: moment
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Athlete By Id
exports.athlete_show_get = (req, res) => {
    console.log(req.query.id);

    // Find the athlete by ID
    Athlete.findById(req.query.id)
    .populate('coach').populate('region').populate('performance')
    .then((athlete) => {
        // PERFORMANCE?
        Performance.find()
        .then((performance) => {
          res.render("athlete/detail", { athlete, moment, performance }); // athlete: athlete, moment: moment
        })
       .catch((err) => {
        console.log(err)
       });
    }) 
    .catch((err) => {
        console.log(err)
    })
};



// HTTP DELETE - Athlete
exports.athlete_delete_get = (req, res) => {
    console.log(req.query.id);

    Athlete.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/athlete/index");
    })
    .catch(err => {
        console.log(err);
    })
}

// Edit API

// HTTP GET - Load Athlete Edit Form
exports.athlete_edit_get = (req, res) => {
    Athlete.findById(req.query.id)
    .then((athlete) => {
        Region.find()
        .then((regions) => {
            res.render("athlete/edit", {athlete, regions})
        })
        .catch(err => {
            console.log(err);
    })
    })
}

// HTTP PUT - Athlete Update
exports.athlete_update_put = (req, res) => {
    console.log(req.body.id);

    Athlete.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/athlete/index");
    })
    .catch(err => {
        console.log(err)
    })
}


//  SEARCH - HTTP POST ATTEMPT NUMBER 952

exports.athlete_search = (req, res) => {
  let athlete = new Athlete(req.body);
  console.log(athlete.nameAthlete);

  Athlete.find({ nameAthlete: { $regex: athlete.nameAthlete } })
    .then((athletes) => {
      res.render("athlete/index", { athletes: athletes, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};