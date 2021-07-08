const router = require('express').Router();
const { getTraits, getPetMatch } = require('./controller.js');

router.get('/traits', getTraits);

router.get('/petmatch', getPetMatch);

module.exports = router;