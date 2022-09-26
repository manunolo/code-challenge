var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

// Listado de usuarios
router.get('/list', usersController.list);
// Registro de un nuevo usuario
router.post('/register', usersController.register);

module.exports = router;
