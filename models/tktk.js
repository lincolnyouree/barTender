const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tktkSchema = new mongoose.Schema({
   name: String,
   email: String,
   googleId: String
 }, {
   timestamps: true
});

module.exports = mongoose.model("Tktk", tktkSchema);
