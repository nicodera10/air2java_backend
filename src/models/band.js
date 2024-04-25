// Importez Sequelize et la connexion à la base de données
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Définissez le modèle Band
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

// Exportez le modèle Band
module.exports = { Band };
