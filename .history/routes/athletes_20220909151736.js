const express = require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

const athleteCtrl = require('../controllers/athletes');

// const isLoggedIn = require('../helper/isLoggedIn');

// Routes runner.get /add will have middleware in the middle but it has been removed until we have log ins.
router.get('/runner/add', athleteCtrl.athlete_create_get);
router.post('/runner/add', athleteCtrl.athlete_create_post);
router.get("/runner/index", athleteCtrl.athlete_index_get);
router.get("/runner/detail", athleteCtrl.athlete_show_get);
router.get("/runner/delete", athleteCtrl.athlete_delete_get);
router.get("/runner/edit", athleteCtrl.athlete_edit_get);
router.put("/runner/update", athleteCtrl.athlete_update_put);

module.exports = router;