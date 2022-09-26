module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        telefono: {
            type: dataTypes.BIGINT,
        },
        email: {
            type: dataTypes.STRING,
        },
        domicilio: {
            type: dataTypes.TEXT,
       },
    };
    let config = {
        tableName : 'users',
        timestamps : false,
    };
    let Users = sequelize.define(alias,cols,config);

    return Users;
};