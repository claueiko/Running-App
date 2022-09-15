const express = require("express");

const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));


// Images:
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });


const coachCtrl = require("../controllers/coaches");
const traningPlanCtrl = require("../controllers/trainingPlans")

//isLoggedIn middleware
const isLoggedIn = require("../helper/isLoggedIn");

//Routes
// router.get("/coach/add", IsLoggedIn, coachCtrl.coach_create_get); to be added when log in etc is ready
router.get("/coach/add", coachCtrl.coach_create_get);
router.post("/coach/add", upload.single('image'), coachCtrl.coach_create_post);
router.get("/coach/index", coachCtrl.coach_index_get);
router.get("/coach/detail", coachCtrl.coach_show_get);

// route for coaches training plan
router.get("coach/detail", traningPlanCtrl.coach_trainingPlan_get);
router.post("/trainingPlan/add", traningPlanCtrl.coach_trainingPlan_post);

router.get("/coach/delete", coachCtrl.coach_delete_get);
router.get("/coach/edit", coachCtrl.coach_edit_get);
router.put("/coach/update", coachCtrl.coach_update_put);


module.exports = router;
