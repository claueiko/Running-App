// Require Region Model
// const { Article } = require("../models/Article");
const { Region } = require("../models/Region");
// Api to require moment library
const moment = require("moment");

// APIs for regions

//CRUD

// Create
//HTTP GET - Load regionFrom
exports.region_create_get = (req, res) => {
  res.render("region/add");
};

//HTTP POST - Region
exports.region_create_post = (req, res) => {
  // console.log(req.body);
  // res.send("POST WORKS");

  // Saving the data into the database
  let region = new Region(req.body);
  region
    .save()
    .then(() => {
      res.redirect("/region/index");
    })
    .catch((err) => {
      console.log(err);
      res.send("Please write again later.");
    });
};

// HTTP Get - Region index API
exports.region_index_get = (req, res) => {
  Region.find()
    .then((regions) => {
      res.render("region/index", { regions, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP Get - Region by Id
exports.region_show_get = (req, res) => {
  console.log(req.query.id);

  // Find the region by that ID
  Region.findById(req.query.id)
    // .populate("article")
    .then((region) => {
      res.render("region/detail", { region, moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

//HTTP DELETE - Region
exports.region_delete_get = (req, res) => {
  console.log(req.query.id);

  Region.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect("/region/index");
    })
    .catch((err) => {
      console.log(err);
    });
};

// EDIT
// HTTP GET - LOAD ARTICLE EDIT
exports.region_edit_get = (req, res) => {
  Region.findById(req.query.id)
    .then((region) => {
      res.render("region/edit", { region });
    })
    .catch((err) => {
      console.log(err);
    });
};

// UPDATE HTTP PUT OR POST
exports.region_update_put = (req, res) => {
  console.log(req.body.id);
  Region.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/region/index");
    })
    .catch((err) => {
      console.log(err);
    });
};
