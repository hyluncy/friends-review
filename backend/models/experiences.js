const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   // overallRating: 
   // description: 
   // delete rating and review 
   // keep reviewedBy : users =---> use ref id insteaad 
   
   overallRating: { type: Number }, // To be calculated and stored
   review: { type: String, required: false },
   reviewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
})

module.exports = mongoose.model('Experience', experienceSchema);
