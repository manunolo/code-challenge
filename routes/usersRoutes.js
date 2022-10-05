var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var checkTokenMiddleware = require('../middlewares/checkTokenMiddleware');

router.get('/list', checkTokenMiddleware, usersController.list);
router.post('/register', usersController.register);

module.exports = router;
