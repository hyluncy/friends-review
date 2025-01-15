const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 

const userSchema = new mongoose.Schema({
   email: { type: String, required: true, unique: true },
   username: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   createdOn: { type: Date, default: Date.now },
   following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
   favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experiences'}],
}); 

userSchema.plugin(uniqueValidator, { message: `${PATH} already exists`})

module.exports = mongoose.model('User', userSchema);