const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    register:(req, res) => {
        db.transaction();
        try{
            let retorno = db.Users.create(req.body).then((usuario)=>{
                return {
                    data:usuario,
                    status:200
                };
            });
            db.commit();
        } catch(error){
            db.rollback();
            let retorno = {
                error:"Hubo un error en base de datos, intente mas tarde",
                status:500
            }
        }

        Promise.all([retorno]).then(([retorno])=>{
            res.json(retorno)
        })
    },
    list:(req, res) => {
        let usuarios = db.Users.findAll().then((usuarios)=>{
            return usuarios;
        });

        Promise.all([usuarios]).then(([usuarios]) => {
            res.json({
                data: usuarios,
                status: 200
            })
        })
    },
}