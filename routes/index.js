const express = require('express');
const {
    getAllUsers, 
    getUserById,
    addNewUser
} = require('../controllers/users');

const router = express.Router();

router.get('/users', getAllUsers);

router.post('/users', addNewUser);

router.get('/users/:id', getUserById);

module.exports = router;