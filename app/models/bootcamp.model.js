const { DataTypes } = require('sequelize');
const conexion = require('../config/db.config.js');

const Bootcamp = conexion.define('Bootcamp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    cue: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        validate: { min: 5, max: 20 } 
    },
    description: { 
        type: DataTypes.STRING, 
        allowNull: false
    } 
}, {
    tableName: "bootcamps"
});

module.exports = Bootcamp;
