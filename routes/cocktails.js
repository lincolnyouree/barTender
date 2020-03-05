const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');
const passport = require('passport');

router.get('/', isLoggedIn, cocktailsCtrl.index);
router.get('/search', isLoggedIn, cocktailsCtrl.search);
router.post('/search', isLoggedIn, cocktailsCtrl.apiCall);
router.post('/addDrink', isLoggedIn, cocktailsCtrl.addDrink);
router.delete('/:id', cocktailsCtrl.deleteDrink);
router.get('/:id', cocktailsCtrl.show);
router.put('/:id', cocktailsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.render('login');
}
                              
module.exports = router;