const express = require('express'); 
const router = express.Router(); 
const {
    registerUser, 
    loginUser, 
    findUser,    
} = require('../controllers/user'); 

router.post('/signup', registerUser); 
router.post('/login', loginUser); 
router.get('/my-page', findUser); 
 
module.exports = router; 