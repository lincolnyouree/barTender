const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/cocktails/:id/reviews', reviewsCtrl.create);

// "/cocktails/<%= showDrink._id %>/reviews"

module.exports = router;