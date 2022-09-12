const express = require("express");
const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

const regionCtrl = require("../controllers/regions");

// //isLoggedIn middleware
// const IsLoggedIn = require("../helper/isLoggedIn");

//Routes
router.get("/region/add", regionCtrl.region_create_get);
router.post("/region/add", regionCtrl.region_create_post);
router.get("/region/index", regionCtrl.region_index_get);
router.get("/region/detail", regionCtrl.region_show_get);
router.get("/region/delete", regionCtrl.region_delete_get);
router.get("/region/edit", regionCtrl.region_edit_get);
router.put("/region/update", regionCtrl.region_update_put);

module.exports = router;
