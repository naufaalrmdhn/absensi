const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rute untuk login
router.post('/login', authController.login);

// Rute untuk register
router.post('/register', authController.register);
//rute untuk get users
router.get('/users', authController.getUsers);
//rute untuk get user by id
router.get('/users/:id', authController.getUserById);
//rute untuk delete user by id
router.put('/users/:id', authController.editUserById);
//rute untuk delete user by id
router.delete('/users/:id', authController.deleteUserById);



module.exports = router;
