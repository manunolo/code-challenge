var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var adminMiddleware = require('../middlewares/adminMiddleware');


//Login de los admins
router.get('/login',adminMiddleware, adminController.login);

module.exports = router;
