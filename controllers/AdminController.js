const db = require('../database/models');
const sequelize = db.sequelize;
const jwt = require("jsonwebtoken");

const { validationResult, body } = require("express-validator");

module.exports = {
    login(req, res){
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.json({
            data: errors,
            status: 300
          });
        }
        let admin = db.Admins.findAll({
             where: { email: req.body.email }
        }).then((admin)=>{
             return admin[0];
        }).catch((error)=>{
            console.error(error);
        });

        Promise.all([admin]).then(([adminData]) => {
            if (adminData) {
                if (req.body.password === adminData.password) {
                    let token = jwt.sign({
                        id: adminData.id,
                        email: adminData.email,
                        password: adminData.password
                    }, 'token', { expiresIn: '12h' }); 

                    return res.json({
                        token: token,
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