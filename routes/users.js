const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");
const passport = require('passport');

router.get("/", usersCtrl.index);
router.post(isLoggedIn);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('login');
  }

module.exports = router;