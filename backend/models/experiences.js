const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
   name: { type: String, required: true, unique: true },
   rating: { type: String, required: true, unique: true },
   review: { type: String, required: false },
   reviewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Experience', experienceSchema);