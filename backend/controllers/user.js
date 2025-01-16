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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; 

        const userAccount = await retrieveUser(email); 

        if (userAccount.status !== 200) {
            return res.status(userAccount.status).json({ message: userAccount.message }); 
        }

        const correctPassword = await bcrypt.compare(password, userAccount.password); 

        if (!correctPassword) {
            return { status: 401, message: 'Incorrect Password' }; 
        }
        
        res.redirect('/'); 

    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message })
    }   
}; 

const retrieveUser = async (email) => {
    try {
        const foundUser = await User.findOne({ email }); 
        if (!foundUser) {
            return { status: 404, message: 'User not found'}; 
        }
        return { status: 200, user: foundUser }; 
    } catch (err) {
        return { status: 500, message: 'Error', error: err.message }; 
    }
}; 

module.exports = {
    registerUser,
    loginUser,
    retrieveUser,
  };