const User = require("../models/user");

module.exports = {
  index
};

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.render("users/index", { 
      title: 'Cocktails',
      users,
      user: req.user,
      name: req.query.name
    });
  });
}
