const express = require("express");
const router = express.Router();
const tktksCtrl = require("../controllers/tktks");

router.get("/", tktksCtrl.index);
router.post(isLoggedIn);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
