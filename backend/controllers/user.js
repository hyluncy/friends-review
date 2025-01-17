const bcrypt = require('bcryptjs'); 
const User = require('../models/users'); 
const { isValidEmail } = require('../service/userService'); 

const registerUser = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body; 
        const existingUser = await findUser(email); 
        if (existingUser) {
            return res.status(400).json({ message: 'An account already exists with the provided email. Please login.' }); 
        }

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

const findUser = async (searchedCredential) => {
    try {
        const isEmail = validEmail(searchedCredential);
        return await User.findOne(
            isEmail ? { email: searchedCredential } : { username: searchedCredential }
        );
    } catch (err) {
        throw new Error('Database query failed: ' + err.message);
    }
};

module.exports = {
    registerUser,
    loginUser,
    findUser,
  };