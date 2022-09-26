const {body} = require('express-validator');

module.exports = [
    body('nombre'),
    body('apellido'),
    body('dni'),
    body('telefono'),
    body('email'),
    body('domicilio'),
    body('categoria'),
    body('email').isEmail().withMessage('Email: Debe ingresar un formato valido de Email'),
    body('password').notEmpty().withMessage('Contraseña: Debe ingresar una contraseña').isLength({min: 5}).withMessage('Contraseña: Minimo de 4 caracteres'),
];