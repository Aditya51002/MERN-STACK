const express = require('express')


const { userController, getAllUserInControllers, getByIdController, updateUserController } = require('../controller/userController');

const router = express.Router();

router.post('/users', userController);
router.get('/users', getAllUserInControllers);
router.get('/users/:id', getByIdController);
router.put('/users/:id', updateUserController);

module.exports = router;