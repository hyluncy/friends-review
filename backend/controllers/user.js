const User = require('../models/users'); 
const bcrypt = require('bcryptjs'); 

const registerUser = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body; 

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match'})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10); 

        const user = new User({ 
            username, 
            email, 
            password: hashedPassword, 
        }); 

        await user.save(); 
        res.json({ message: `User, ${username}, has been registered.` });
    } catch(err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ message: err.message })
        }
        else {
            res.status(500).json({ message: 'Server error', err })
        }
    }
}; 

const loginUser = (req, res) => {
    res.json({ message: 'Login User' }); 
}; 

const retrieveUser = async (email, password) => {
    try {
        const foundUser = await User.findOne({ email }); 
        const correctPassword = await bcrypt.compare(password, foundUser.password); 

        if (!correctPassword) {
            return { status: 401, message: 'Incorrect Password' }; 
        }

        return { status: 200, user: foundUser }; 
    } catch (err) {
        return { status: 500, message: 'Error', error: err.message }
    }
}; 

module.exports = {
    registerUser,
    loginUser,
    retrieveUser,
  };