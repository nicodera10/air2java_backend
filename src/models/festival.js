const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize');

const Festival = sequelize.define('Festival', {
    id_fest: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_fest: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_fest: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date_fest: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    end_date_fest: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_person: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_town: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'festival',
    timestamps: false
});

module.exports = { Festival };
