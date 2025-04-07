const bcrypt = require('bcryptjs'); 
const User = require('../models/user'); 
const { findUser, findUserByUserName } = require('../database/query');

const registerUser = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body; 
        const existingUser = await findUser(email); 
        if (existingUser) {
            console.log('Account already exists')
            return res.status(400).json({ message: 'An account already exists with the provided email. Please login.' }); 
        }

        if (password !== confirmPassword) {
            console.log('Password Issue')
            return res.status(400).json({ message: 'Passwords do not match'})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10); 

        const user = new User({ 
            username, 
            email, 
            password: hashedPassword, 
        }); 

        await user.save(); 
        console.log('user save finished')
        res.json({ message: `User, ${username}, has been registered.` });
    } catch(err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: 'Validation error with backend' })
        }
        else {
            res.status(500).json({ message: 'Server error' })
        }
    }
}; 

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const userAccount = await findUser(email); 

        if (!userAccount) {
            return res.status(404).json({ message: 'User not found' }); 
        }

        const correctPassword = await bcrypt.compare(password, userAccount.password); 

        if (!correctPassword) {
            return res.status(401).json({ message: 'Incorrect Password. Please try again' }); 
        }
        
        res.redirect('/'); 

    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message })
    }   
}; 

module.exports = {
    registerUser,
    loginUser,
  };