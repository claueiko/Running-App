const express = require("express");
const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

const coachCtrl = require("../controllers/coaches");

//isLoggedIn middleware
// const IsLoggedIn = require("../helper/isLoggedIn");

//Routes
// router.get("/coach/add", IsLoggedIn, coachCtrl.coach_create_get); to be added when log in etc is ready
router.get("/coach/add", coachCtrl.coach_create_get);
router.post("/coach/add", coachCtrl.coach_create_post);
router.get("/coach/index", coachCtrl.coach_index_get);
router.get("/coach/detail", coachCtrl.coach_show_get);
router.get("/coach/delete", coachCtrl.coach_delete_get);
router.get("/coach/edit", coachCtrl.coach_edit_get);
router.put("/coach/update", coachCtrl.coach_update_put);

module.exports = router;
