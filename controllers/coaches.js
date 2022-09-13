// Require Coach Model
const { Athlete } = require("../models/Athlete");
const { Coach } = require("../models/Coach");
const { Region } = require("../models/Region");

// Api to require moment library
const moment = require("moment");


// APIs for coaches

//CRUD

// Create
//HTTP GET - Load coachFrom
exports.coach_create_get = (req, res) => {
  //Athletes?
  Athlete.find()
  .then((athletes) => {
    Region.find()
      .then((regions) => {
        res.render("coach/add", { regions ,athletes });
      })
      .catch((err) => {
        console.log(err);
      });

  })
  .catch((err) => {
    console.log(err)
  })
  
};


//HTTP POST - Coach

exports.coach_create_post = (req, res) => {
  
  // Saving the data into the database

 //Images 

  console.log(req.file);
  let imagePath = '/uploads/' + req.file.filename;
  
  let coach = new Coach(req.body);
  coach.image = imagePath;
  coach
    .save()
    .then(() => {
      res.redirect("/coach/index");
    })
    .catch((err) => {
      console.log(err);
      res.send("Please write again later.");
    });
};


// HTTP Get - Coach index API
exports.coach_index_get = (req, res) => {
  Coach.find().populate("region").populate("athlete")
    .then(coaches => {
      res.render("coach/index", { coaches, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};


// HTTP Get - Coach by Id
exports.coach_show_get = (req, res) => {

  console.log(req.query.id);
  
  // Find the coach by that ID
  Coach.findById(req.query.id)
    .populate("athlete").populate("region").populate("club")
    .then(coach => {
      res.render("coach/detail", { coach, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};


//HTTP DELETE - Coach
exports.coach_delete_get = (req, res) => {
  console.log(req.query.id);

  Coach.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/coach/index");
    })
    .catch((err) => {
      console.log(err);
    });
};

// EDIT
// HTTP GET - LOAD ARTICLE EDIT
exports.coach_edit_get = (req, res) => {
  Coach.findById(req.query.id)
    .then((coach) => {
      Region.find()
      .then((regions) => {
        res.render("coach/edit", { coach, regions })
      })
    .catch((err) => {
      console.log(err);
    })
  })
  }


// UPDATE HTTP PUT OR POST
exports.coach_update_put = (req, res) => {
  console.log(req.body.id);
  Coach.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/coach/index");
    })
    .catch((err) => {
      console.log(err);
    });
};
