const User = require('../models/user');
const Experience = require('../models/experience'); 
const { isValidEmail } = require('../services/userService'); 

const findUser = async (searchedCredential) => { //TODO: move to its own file
    try {
        const isEmail = isValidEmail(searchedCredential);
        return await User.findOne(
            isEmail ? { email: searchedCredential } : { username: searchedCredential }
        );
    } catch (err) {
        throw new Error('Database query failed: ' + err.message);
    }
};

const findUserByUserName = async (username) => { //TODO: move to its own file
    try {
        return await User.findOne(
            { username: username }
        );
    } catch (err) {
        throw new Error('Database query failed (username): ' + err.message);
    }
};

const findExperience = async (searchedExp) => {
    try {
        return await Experience.findOne(
            { experience: searchedExp }
        ); 
    } catch (err) {
        throw new Error('Database query failed (experience): ' + err.message); 
    }
}

module.exports = {
    findUser,
    findUserByUserName,
  };

