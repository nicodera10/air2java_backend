const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Band = sequelize.define('Band', {
  id_band: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_band: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  id_person: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'band',
  timestamps: false
});

module.exports = { Band };
