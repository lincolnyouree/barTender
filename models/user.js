const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

const cocktailSchema = new mongoose.Schema({
  haveTried: {
    type: Boolean,
    default: false
  }, 
  drinkName: {
    type: String,
  },
  image: {
    type: String,
  },
  instructions: {
    type: String,
  },
  glass: {
    type: String,
  },
  ingredient1: {type: [String]},
  measure1: {type: [String]},
  ingredient2: {type: [String]},
  measure2: {type: [String]},
  ingredient3: {type: [String]},
  measure3: {type: [String]},
  ingredient4: {type: [String]},
  measure4: {type: [String]},
  ingredient5: {type: [String]},
  measure5: {type: [String]},
  ingredient6: {type: [String]},
  measure6: {type: [String]},
  ingredient7: {type: [String]},
  measure7: {type: [String]},
  ingredient8: {type: [String]},
  measure8: {type: [String]},
  ingredient9: {type: [String]},
  measure9: {type: [String]},
  ingredient10: {type: [String]},
  measure10: {type: [String]},
  reviews: [reviewSchema]
});

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   googleId: String,
   favoriteDrinks: [cocktailSchema],
   
 }, {
   timestamps: true
});

module.exports = mongoose.model("User", userSchema);