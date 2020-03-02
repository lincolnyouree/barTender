const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.index);
router.get('/search', cocktailsCtrl.search);
router.post('/search', cocktailsCtrl.apiCall);

module.exports = router;