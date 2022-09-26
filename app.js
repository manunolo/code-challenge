var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var usersRouter = require('./routes/usersRoutes');
var adminRouter = require('./routes/adminRoutes');

var app = express();

app.use(cors({origin: "http://localhost:3000"}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admins', adminRouter);
app.use('/users', usersRouter);

module.exports = app;
