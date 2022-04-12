const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  title: { type: String, required: true },
  manufacturer : { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  mainPepperIngredient : {type: String, required: true},
  userId: { type: String, required: true },
});

module.exports = mongoose.model('sauce', sauceSchema);