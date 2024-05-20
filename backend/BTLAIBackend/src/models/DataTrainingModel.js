const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const sequelize = require('./sequelize');
const DataTrainingModel = sequelize.define('DataTrainingModels', {
    dataTrainingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    monChinh: DataTypes.STRING , 
    salad : DataTypes.STRING ,
    soup : DataTypes.STRING ,
    trangMieng : DataTypes.STRING ,
    doUong : DataTypes.STRING,
    noodles : DataTypes.STRING ,
    gao : DataTypes.STRING,
    label : DataTypes.BOOLEAN
},
    {
        paranoid: true,
        freezeTableName: true,
    })
module.exports = DataTrainingModel;