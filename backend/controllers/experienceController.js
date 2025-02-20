const { findOne } = require("../models/user");
const Experience = require('../models/experience'); 

// const addExperience = async (req, res) => {
//     const { name, category } = req.body; 
//     const existingExperience = await findOne({ name }); 

//     if (existingExperience) {
//         return res.status(400).json({ message: 'Experience already exists. Please refer to '}) 
//     }
// }   

const retrieveExperience = async (req, res) => {
    try {
        const searchQuery = req.query.search || ''; 

        let filter = searchQuery ? { name: { $regex: searchQuery, $options: "i" } } : {};

        const experiences = await Experience.find(filter);
    
        res.status(200).json(Array.isArray(experiences) ? experiences : []); 
    } catch (err) {
        res.status(500).json({err: 'Server Error Retrieving Experiences' }); 
    }
}; 

module.exports = { retrieveExperience };