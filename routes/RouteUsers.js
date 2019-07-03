const express = require('express');
const router = express.Router();
const controller = require('../controllers/ControllerUser')

router.post('/create_user', controller.addUser)     

module.exports = router;