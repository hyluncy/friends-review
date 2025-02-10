const { findOne } = require("../models/user");


const addExperience = async (req, res) => {
    const [ name, category ] = req.body; 
    const existingExperience = await findOne(name); 

    if (existingExperience) {
        return res.status(400).json({ message: 'Experience already exists. Please refer to '}) 
    }
}   

const retrieveExperience = async (req, res) => {
    try {
        const { search } = req.query; 
        let experiences; 

        if (search) {   // Check if an experience was searched 
            experiences = await experience.find({
                name: { $regex: search, $options: "i" } // mongoose method to search for partial matches & is case-insensitive 
            }); 
        }
        else {      // When nothing was searched / or on the experiences page
            experiences = await experience.find(); 
        }
        res.status(200).json(experiences); 
    } catch (err) {
        res.status(500).json({err: 'Server Error Retrieving Experiences' }); 
    }
}; 

