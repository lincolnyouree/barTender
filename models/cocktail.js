const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  recipe: {
    type: String,
   },
});

module.exports = mongoose.model(
  'Cocktail',
  cocktailSchema
);