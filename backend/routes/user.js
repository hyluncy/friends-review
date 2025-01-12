const express = require('express'); 
const router = express.Router(); 
const {
    registerUser, 
    loginUser, 
    retrieveUser,    
} = require('../controllers/user'); 

router.post('/', registerUser); 
router.post('/login', loginUser); 
router.get('/my-page', retrieveUser); 

module.exports = router; 