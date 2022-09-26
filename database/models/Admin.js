module.exports = (sequelize, dataTypes) => {
    let Admin = sequelize.define(
        'Admins',
        {
            id: {
                type: dataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: dataTypes.STRING,
            },
            password : {
                type: dataTypes.STRING,
            },
            user_id : {
                type: dataTypes.INTEGER(10),
            }
        },{
            tableName : 'admins',
            timestamps : false,
        }
    );

    return Admin;
};