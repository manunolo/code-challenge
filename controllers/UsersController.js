const { sequelize, Users } = require("../database/models");

module.exports = {
    register: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const usuario = await Users.create(req.body, { transaction });
            if (usuario) {
                await transaction.commit();
                return res.json(usuario);
            }
            res.status(400).json({
                message:"Hubo un error inesperado al intentar registrar el usuario, por favor reintente",
            });
        } catch (error) {
            await transaction.rollback();
            return res.status(500).json("Hubo un error en base de datos, intente mas tarde", error);
        }
    },
    list: (req, res) => {
        Users.findAll().then((usuarios)=>{
            res.json({
                data : usuarios,
                status : 200,
            });
        }).catch((err) => {
            return res.status(500).json("Hubo un error en base de datos, intente mas tarde", error);
        });
    },
};