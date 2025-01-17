const User = require('../models/users'); 
const Experience = require('../models/experiences'); 
const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
   experience: { type: mongoose.Schema.Types.ObjectId, ref: 'Experience' },
   title: { type: String, required: true },
   rating: { 
        type: Number, 
        required: true, 
        minimum: 0, 
        maximum: 5
     },
   review: { type: String, required: false },
   reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

module.exports = mongoose.model('Review', experienceSchema);