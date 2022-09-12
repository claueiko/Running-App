const express = require("express");
const methodOverride = require("method-override");

const router = express.Router();

router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

const clubCtrl = require("../controllers/clubs");

//isLoggedIn middleware
// const IsLoggedIn = require("../helper/isLoggedIn");

//Routes
// router.get("/club/add", IsLoggedIn, clubCtrl.club_create_get); to be added when log in etc is ready
router.get("/club/add", clubCtrl.club_create_get);
router.post("/club/add", clubCtrl.club_create_post);
router.get("/club/index", clubCtrl.club_index_get);
router.get("/club/detail", clubCtrl.club_show_get);
router.get("/club/delete", clubCtrl.club_delete_get);
router.get("/club/edit", clubCtrl.club_edit_get);
router.put("/club/update", clubCtrl.club_update_put);

module.exports = router;
