const express = require('express');
const { getLandingConfig } = require('../controllers/configController');


const router = express.Router();

// Map GET request to controller function
router.get('/', getLandingConfig);

module.exports = router;