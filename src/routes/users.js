const express = require('express');
const controllerUsers = require('../controller/users');

const router = express.Router();


router.get('/', controllerUsers.getAllUser);
router.post('/', controllerUsers.createNewUser);
router.patch('/:id', controllerUsers.updateUser);
router.delete('/:id', controllerUsers.deleteUser);


module.exports = router;