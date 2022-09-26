const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult, body } = require("express-validator");

module.exports = {
    login(req, res){
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.json({
            data: errors.errors,
            status: 300
          });
        }
        let admin = db.Admins.findAll({
             where: { email: req.body.email }
        }).then((admin)=>{
             return admin[0];
        });

        Promise.all([admin]).then(([adminData]) => {
            if (adminData) {
                let passValid = req.body.password == adminData.password;
                if (passValid) {
                    return res.json({
                        data: adminData,
                        status:200
                    });
                }
            } else {
                return res.json({
                    data: {error : "Los datos ingresados no son validos"},
                    status:401
                });
            }
        })
    },
}