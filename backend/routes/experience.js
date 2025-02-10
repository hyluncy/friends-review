const express = require('express'); 
const router = express.Router(); 
const {
    addExperience,
    retrieveExperience,  
} = require('../controllers/experience'); 

router.get('/experiences', retrieveExperience) 
router.post('/experiences/addNew', addExperience)
 
module.exports = router; 