const express = require('express'); 
const router = express.Router(); 
const {
    addExperience,
    retrieveExperience,  
    retrieveExperienceById,
} = require('../controllers/experienceController'); 

router.get('/', retrieveExperience) 
router.get('/:id', retrieveExperienceById)
router.post('/addNew', addExperience)
 
module.exports = router; 