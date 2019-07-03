const express = require('express');
const router = express.Router();
const controller = require('../controllers/ControllerRent')
const auth = require('../middleware/auth')

router.post('/', auth, controller.rentMovie)
router.post('/return', controller.returnMovie)   

module.exports = router;