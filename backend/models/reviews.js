const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   rating: { 
        type: Number, 
        required: true, 
        minimum: 0, 
        maximum: 5
     },
   review: { type: String, required: false },
   reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Review', experienceSchema);