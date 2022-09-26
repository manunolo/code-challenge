const db = require('../database/models');

module.exports = {
    register:async (req, res) => {
        let transaction = await db.sequelize.transaction();
        let retorno;
        try{
            retorno = db.Users.create(req.body,{transaction}).then((usuario)=>{
                return {
                    data:usuario,
                    status:200
                };
            });
            transaction.commit();
        } catch(error){
            console.log(db.sequelize);
            transaction.rollback();
            retorno = {
                error:"Hubo un error en base de datos, intente mas tarde",
                status:500
            }
        }

        Promise.all([retorno]).then(([retorno])=>{
            res.json(retorno)
        })
    },
    list:async (req, res) => {
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