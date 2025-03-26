const express = require('express'); 
const router = express.Router(); 
const {
    addExperience,
    retrieveExperience,  
} = require('../controllers/experienceController'); 

router.get('/', retrieveExperience) 
router.post('/addNew', addExperience)
 
module.exports = router; 