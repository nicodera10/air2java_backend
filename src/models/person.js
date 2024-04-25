// Importez Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Initialisez Sequelize avec votre connexion à la base de données
const sequelize = require('../config/sequelize');

// Définissez votre modèle Person
const Person = sequelize.define('Person', {
  id_person: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  firstname_person: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  lastname_person: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  civil_status_person: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  address_1_person: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  address_2_person: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  phone_person: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  email_person: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  birthdate_person: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_responsability_person: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_appuser: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_band: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_town: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    tableName: 'person',
    timestamps: false // Désactivez les timestamps automatiques
});

// Exportez le modèle Person
module.exports = { Person };
