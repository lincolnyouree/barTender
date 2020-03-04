const axios = require('axios');
const User = require('../models/user');

module.exports = {
    search,
    index,
    apiCall,
    addDrink,
    // update,
    deleteDrink,
    show
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
            console.log(results);
            res.render('cocktails/search', {title: "Search Results", results : results})
        })
        .catch(error => {
            console.log(error);
        })
};

function addDrink(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.favoriteDrinks.push(req.body);
        user.save(function(err) {
            res.redirect('/');
        })
    })
};

function deleteDrink(req, res) {
    User.findById(req.user._id, function(err, user) {
        console.log(user.favoriteDrinks[req.params.id])
        user.favoriteDrinks.splice(req.params.id , 1)
        user.save(function (err) {
            res.redirect('/');
        })
    })
  };

//   function update (req, res) {
//     User.findById(req.user._id, function(err, user) {
//         console.log(user.favoriteDrinks[req.params.id])
//         user.favoriteDrinks.update(req.params.id , req.body)
//         user.save(function (err) {
//             res.redirect('/');
//         })
//     })
//   };

function show(req, res) {
    User.findById(req.user._id, function(err, user) {
        console.log(user.favoriteDrinks[req.params.id])
        let showDrink = user.favoriteDrinks.id(req.params.id)
        
            res.render('cocktails/show', {showDrink, title: 'Details'});
        
    })
  };