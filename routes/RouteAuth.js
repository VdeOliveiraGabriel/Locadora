const express = require('express');
const router = express.Router();
const controller = require('../controllers/ControllerAuth')
const auth = require('../middleware/auth')

router.post('/login', controller.auth)

router.post('/logout', auth, (req, res) => {
    res.status(200).send({ auth: false, token: null });
});

module.exports = router;