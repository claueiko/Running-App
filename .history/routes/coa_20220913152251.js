const router = require('express').Router();

const coaCtrl = require("../controllers/coa");

// Routes
router.get("/coa/signup", coaCtrl.coa_signup_get);
router.post("/coa/signup", coaCtrl.coa_signup_post);

router.get("/coa/signin", coaCtrl.coa_signin_get);
router.post("/coa/signin", coaCtrl.coa_signin_post);

router.get("/coa/logout", coaCtrl.coa_logout_get)

module.exports = router;