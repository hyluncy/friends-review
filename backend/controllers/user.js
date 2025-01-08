
const registerUser = (req, res) => {
    res.json({ message: "Register User" }); 
}; 

const loginUser = (req, res) => {
    res.json({ message: "Login User" }); 
}; 

const retrieveUser = (req, res) => {
    res.json({ message: "Logged In User Data" }); 
}; 

module.exports = {
    registerUser,
    loginUser,
    getLoggedInUser,
  };