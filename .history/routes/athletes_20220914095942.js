const express = require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

//images:
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




const athleteCtrl = require('../controllers/athletes');
const performanceCtrl = require('../controllers/performances')

// const isLoggedIn = require('../helper/isLoggedIn');

// Routes athlete.get /add will have middleware in the middle but it has been removed until we have log ins.
router.get('/athlete/add', athleteCtrl.athlete_create_get);
router.post('/athlete/add', upload.single('image'), athleteCtrl.athlete_create_post);
router.get("/athlete/index", athleteCtrl.athlete_index_get);
router.get("/athlete/detail", athleteCtrl.athlete_show_get);
// route for performance in athlete details
router.get("/athlete/detail", performanceCtrl.athlete_performance_get);
router.post("/athlete/detail", performanceCtrl.athlete_performance_post);

router.get("/athlete/delete", athleteCtrl.athlete_delete_get);
router.get("/athlete/edit",  athleteCtrl.athlete_edit_get);
router.put("/athlete/update", athleteCtrl.athlete_update_put);

module.exports = router;