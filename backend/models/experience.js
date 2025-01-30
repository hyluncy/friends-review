const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   category: { type: String, required: true },
   overallRating: { type: Number }, // To be calculated and stored
})

module.exports = mongoose.model('Experience', experienceSchema);
