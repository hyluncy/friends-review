const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('../../utils/logger'); 
const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI); 
        logger.info('Connected to the database'); 
    } catch (err) {
        logger.error('Error connecting to the database:', err.message); 
    }
}; 

module.exports = {connectToDB}; 
