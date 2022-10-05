var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var loginMiddleware = require('../middlewares/loginMiddleware');

router.post('/login', adminController.login);

module.exports = router;
