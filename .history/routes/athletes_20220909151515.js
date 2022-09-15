const express = require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

// router.use(express.urlencoded({ extended: true }))

const runnerCtrl = require('../controllers/runners');

const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get('/runner/add', isLoggedIn, runnerCtrl.runner_create_get);
router.post('/runner/add', runnerCtrl.runner_create_post);
router.get("/runner/index", runnerCtrl.runner_index_get);
router.get("/runner/detail", runnerCtrl.runner_show_get);
router.get("/runner/delete", runnerCtrl.runner_delete_get);
router.get("/runner/edit", runnerCtrl.runner_edit_get);
router.put("/runner/update", runnerCtrl.runner_update_put);

module.exports = router;