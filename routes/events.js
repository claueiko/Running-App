const express = require("express");

const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

const eventCtrl = require("../controllers/events");

// const isLoggedIn = require('../helper/isLoggedIn');

// Routes event.get /add will have middleware in the middle but it has been removed until we have log ins.
router.get("/event/add", eventCtrl.event_create_get);
router.post("/event/add", eventCtrl.event_create_post);
router.get("/event/index", eventCtrl.event_index_get);
router.get("/event/detail", eventCtrl.event_show_get);
router.get("/event/delete", eventCtrl.event_delete_get);
router.get("/event/edit", eventCtrl.event_edit_get);
router.put("/event/update", eventCtrl.event_update_put);

// SEARCH
router.post("/event/search", eventCtrl.event_search);

module.exports = router;
