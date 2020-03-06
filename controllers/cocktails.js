const axios = require('axios');
const User = require('../models/user');

module.exports = {
    search,
    index,
    apiCall,
    addDrink,
    deleteDrink,
    show,
    update
}

function index(req, res) {
};

function search(req, res) {
    res.render('cocktails/search', {title: "Search Page", results: null});
};

function apiCall(req, res) {
    let query = req.body.query;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then( response => {
            let results = response.data;
            res.render('cocktails/search', {title: "Search Results", results : results})
        })
        .catch(error => {
        })
};

function addDrink(req, res) {
    User.findById(req.user._id, function(err, user) {
        req.body.reviews = [];
        user.favoriteDrinks.push(req.body);
        user.save(function(err) {
            res.redirect('/');
        })
    })
};

function deleteDrink(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.favoriteDrinks.splice(req.params.id , 1)
        user.save(function (err) {
            res.redirect('/');
        })
    })
  };

function show(req, res) {
    User.findById(req.user._id, function(err, user) {
        let showDrink = user.favoriteDrinks.id(req.params.id)
        res.render('cocktails/show', {showDrink, title: 'Details'});
    })
  };

function update(req, res) {
    User.findById(req.user._id, function(err, user) {
        let drink = user.favoriteDrinks.id(req.params.id)
        if (req.body.haveTried === 'on') {
            drink.haveTried = true;
        }    
        user.save(function (err) {
            res.redirect('/');
        })
    })
};