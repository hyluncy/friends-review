

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const user = new User({ username, email, password }); 
        await user.save(); 
        res.json({ message: 'User account created.' });
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