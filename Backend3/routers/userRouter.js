const express = require('express');
const { userController } = require('../controller/userController');

const router = express.Router();

router.post('/user', userController);
router.get('/')

module.exports = router;