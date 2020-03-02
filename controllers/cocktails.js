const axios = require('axios');
const Cocktail = require('../models/cocktail');


module.exports = {
    search,
    index,
    apiCall
}
function index(req, res) {

}
function search(req, res) {
    res.render('cocktails/search', {title: "Search Page", results: null});
}

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
}