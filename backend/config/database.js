const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); 
        console.log('Connected to the database'); 
    } catch (err) {
        console.error('Error connecting to the database', err.message); 
    }
}; 

module.exports = connectToDB; 
