const jwt = require("jsonwebtoken");
const db = require('../database/models');

module.exports = async (req, res, next) => {
    let errors = [];  
    const permiso = req.get('authorization');
    let tokenAdmin = '';

    if (permiso && permiso.startsWith('Bearer')) {
        tokenAdmin = permiso.substring(7);
    }

    let tokenDecoded;
    try {
        tokenDecoded = jwt.verify(tokenAdmin, 'token');
    } catch (err) {
        tokenDecoded=false; 
    }

    if (tokenDecoded == false) {
        errors.push({ name: 'token', msg: 'token invalido' });
    } else {
        let admin = db.Admins.findAll({
            where: {
                email: tokenDecoded.email,
                password : tokenDecoded.password,
            }
        })
        .then((admin)=>{
            return admin[0] ?? null;
        });
        if (!admin)
        {
            errors.push({ name: 'data', msg: 'usuario no existe' });
        }
        
    }

    req.errors = errors; 
    next()
}