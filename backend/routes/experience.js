const express = require('express'); 
const router = express.Router(); 
const {
    //addExperience,
    retrieveExperience,  
} = require('../controllers/experienceController'); 

router.get('/', retrieveExperience) 
//router.post('/experiences/addNew', addExperience)
 
module.exports = router; 