const { body } = require('express-validator');

module.exports = [
    body("email")
      .notEmpty()
      .withMessage("Introduzca su email ")
      .isEmail()
      .withMessage("Introduzca un formato de email válido"),
    body("dni")
    .notEmpty()
    .withMessage("Introduzca su DNI")
  ];