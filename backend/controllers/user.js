const bcyrpt = require('bcryptjs'); 


const registerUser = async (req, res) => {
    try {
        const { email, username, password, createdOn } = req.body; 

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match'})
        }
        
        const hashedPassword = await bcyrpt.hash(passowrd, 10); 

        const user = new User({ 
            username, 
            email, 
            password: hashedPassword, 
            createdOn, 
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

const retrieveUser = (req, res) => {
    res.json({ message: 'Logged In User Data' }); 
}; 

module.exports = {
    registerUser,
    loginUser,
    retrieveUser,
  };