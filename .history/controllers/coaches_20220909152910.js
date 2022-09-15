// Require Coach Model

const { Coach } = require("../models/Coach");
// const { Club } = require("../models/Club");
// const { Event } = require("../models/Event");
const { Athlete } = require("../models/Athlete");
//another way for the above: constCoach = require("..models/Coach").Coach;

// Api to require moment library
const moment = require("moment");

// APIs for coaches
//CRUD

// Create
//HTTP GET - Load coach From
exports.coach_create_get = (req, res) => {
  // res.render("coach/add");
  Athlete.find()
    .then((athlete) => {
      res.render("coach/add", { athlete });
    })
    .catch((err) => {
      console.log(err);
    });
};

//HTTP POST - Coach
exports.coach_create_post = (req, res) => {
  // console.log(req.body);
  // res.send("POST WORKS");

  // Saving the data into the database
  let coach = new Coach(req.body);

  coach
    .save()
    .then(() => {
      //Many to Many M2MR
      req.body.athlete.forEach((athlete) => {
        Author.findById(athlete, (error, athlete) => {
          athlete.coach.push(coach);
          athlete.save();
        });
      });
      res.redirect("/coach/index");
    })
    .catch((err) => {
      console.log(err);
      res.send("Please write again later.");
    });

  //THIS BELOW IS EMBEDDED
  // Author.findById(req.body.athlete, (error, athlete) => {
  //     athlete.coach.push(coach);
  //     athlete.save();
  //     res.redirect("/athlete/index");
  // })
};

// HTTP Get - Coach index API
exports.coach_index_get = (req, res) => {
  Coach.find()
    .populate("athlete")
    .then((coachs) => {
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
    .populate("athlete")
    .then((coach) => {
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
      res.render("coach/edit", { coach });
    })
    .catch((err) => {
      console.log(err);
    });
};

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
