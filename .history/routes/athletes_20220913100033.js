const express = require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

const athleteCtrl = require('../controllers/athletes');

const isLoggedIn = require('../helper/isLoggedIn');

// Routes athlete.get /add will have middleware in the middle but it has been removed until we have log ins.
router.get('/athlete/add', isLoggedIn, athleteCtrl.athlete_create_get);
router.post('/athlete/add', athleteCtrl.athlete_create_post);
router.get("/athlete/index", athleteCtrl.athlete_index_get);
router.get("/athlete/detail", athleteCtrl.athlete_show_get);
router.get("/athlete/delete", athleteCtrl.athlete_delete_get);
router.get("/athlete/edit", athleteCtrl.athlete_edit_get);
router.put("/athlete/update", athleteCtrl.athlete_update_put);

module.exports = router;