const { findOne } = require("../models/user");


const addExperience = async (req, res) => {
    const [ name, category ] = req.body; 
    const existingExperience = await findOne(name); 

    if (existingExperience) {
        return res.status(400).json({ message: 'Experience already exists. Please refer to '
    }
}   

const retrieveExperience = (req, res) => {
    
}
