const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const AppUser = sequelize.define('AppUser', {
  id_appuser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name_appuser: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  password_appuser: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  type_appuser: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  tableName: 'appuser',
  timestamps: false
});

module.exports = { AppUser };