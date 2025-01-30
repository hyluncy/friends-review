const jwt = require('jsonwebtoken'); 

const generateToken = (payload, expiresIn = '10d') => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn }); 
}; 

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET); 
    } catch (err) {
        throw new Error('Invalid or expired token'); 
    }
}; 

module.exports = {
    generateToken, 
    verifyToken,
}; 