const User = require('../models/user');

module.exports = {
  create
};

function create(req, res) {
    
    User.findById(req.user, function(err, user) {
    let  drink = user.favoriteDrinks.id(req.params.id)
    drink.reviews.push(req.body);
    user.save(function(err) {
      res.redirect(`/cocktails/${req.params.id}`);
    });
  });
}