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
//Images:
// router.use("/uploads", express.static("uploads"));



const coachCtrl = require("../controllers/coaches");

//isLoggedIn middleware
// const IsLoggedIn = require("../helper/isLoggedIn");

//Routes
// router.get("/coach/add", IsLoggedIn, coachCtrl.coach_create_get); to be added when log in etc is ready
router.get("/coach/add", coachCtrl.coach_create_get);
router.post("/coach/add", upload.single('image'), coachCtrl.coach_create_post);
//live search:
router.post('/coach/index', coachCtrl.coach_indexSearch_post);
router.get("/coach/index", coachCtrl.coach_index_get);
router.get("/coach/detail", coachCtrl.coach_show_get);
router.get("/coach/delete", coachCtrl.coach_delete_get);
router.get("/coach/edit", coachCtrl.coach_edit_get);
router.put("/coach/update", coachCtrl.coach_update_put);

module.exports = router;
