// Require Club Model
const { Athlete } = require("../models/Athlete");
const { Club } = require("../models/Club");
const { Region } = require("../models/Region")
// Api to require moment library
const moment = require("moment");

// APIs for clubs

//CRUD

// Create
//HTTP GET - Load clubFrom
exports.club_create_get = (req, res) => {
    Region.find()
    .then((regions) => {
  res.render("club/add", { regions });
    })
    .catch((err) => {
        console.log(err);
    })
};

//HTTP POST - Club
exports.club_create_post = (req, res) => {
  // console.log(req.body);
  // res.send("POST WORKS");

  // Saving the data into the database
  let club = new Club(req.body);
  club
    .save()
    .then(() => {
      res.redirect("/club/index");
    })
    .catch((err) => {
      console.log(err);
      res.send("Please write again later.");
    });
};

// HTTP Get - Club index API
exports.club_index_get = (req, res) => {
  Club.find().populate("region")
    .then(clubs => {
      res.render("club/index", { clubs, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP Get - Club by Id
exports.club_show_get = (req, res) => {
  console.log(req.query.id);

  // Find the club by that ID
  Club.findById(req.query.id)
    .populate("athlete").populate("region")
    .then((club) => {
      res.render("club/detail", { club, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

//HTTP DELETE - Club
exports.club_delete_get = (req, res) => {
  console.log(req.query.id);

  Club.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/club/index");
    })
    .catch((err) => {
      console.log(err);
    });
};

// EDIT
// HTTP GET - LOAD ARTICLE EDIT
exports.club_edit_get = (req, res) => {
  Club.findById(req.query.id)
    .then((club) => {
      Region.find()
      .then((regions) => {
        res.render("club/edit", { club, regions })
      })
      .catch((err) => {
        console.log(err);
    })
    });
};


// UPDATE HTTP PUT OR POST
exports.club_update_put = (req, res) => {
  console.log(req.body.id);
  Club.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/club/index");
    })
    .catch((err) => {
      console.log(err);
    });
};
