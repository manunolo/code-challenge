const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Ingrese su nombre').isLength({ min: 2 }).withMessage('Su nombre debe contener más de dos caracteres'),
    body('apellido').notEmpty().withMessage('Ingrese su apellido').isLength({ min: 2 }).withMessage('Su apellido debe contener más de dos caracteres'),
    body('dni').notEmpty().withMessage('Ingrese un DNI').isNumeric(),
    body('telefono').notEmpty().withMessage('Ingrese un teléfono').isNumeric(),
    body('email').notEmpty().isEmail().withMessage('Ingrese un email válido'),
    body('domicilio').notEmpty().withMessage('Ingrese un email domicilio'),
]
