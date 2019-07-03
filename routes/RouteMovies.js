const express = require('express');
const router = express.Router();
const controller = require('../controllers/ControllerMovie')
const auth = require('../middleware/auth')

router.get('/all', auth, controller.GetAll)
router.get('/:title', auth, controller.GetMovieByTitle)

// router.get('/:name', userController.searchUser)

module.exports = router;