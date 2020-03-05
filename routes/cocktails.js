const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.index);
router.get('/search', cocktailsCtrl.search);
router.post('/search', cocktailsCtrl.apiCall);
router.post('/addDrink', cocktailsCtrl.addDrink);
router.delete('/:id', cocktailsCtrl.deleteDrink);
router.get('/:id', cocktailsCtrl.show);
router.put('/:id', cocktailsCtrl.update);

module.exports = router;