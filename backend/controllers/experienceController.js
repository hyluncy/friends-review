
const Experience = require('../models/experience'); 

const addExperience = async (req, res) => {
    try {
        const { image, name, category } = req.body; 
        const existingExperience = await Experience.findOne({ name }); 

        if (existingExperience) {
            return res.status(400).json({ message: 'Experience already exists. Please refer to '}) 
        }

        const newExperience = new Experience({ name, image, category })
        await newExperience.save(); 
        return res.status(201).json(newExperience); 
    } catch (err) {
        return res.status(500).json({ err: 'Server error while attempting to add experience.'})
    }
}   

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

const retrieveExperienceById = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await Experience.findById(id);
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found (backend) experienceController' });
        }
        res.status(200).json(experience);
    } catch (err) {
        res.status(500).json({ message: 'Server error retrieving experience (backend) experienceController' });
    }
};


module.exports = { retrieveExperience, addExperience, retrieveExperienceById };