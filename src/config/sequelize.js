// sequelize.js
const { Sequelize } = require('sequelize');

// Créer une nouvelle instance Sequelize avec les informations de connexion à la base de données MySQL
const sequelize = new Sequelize('air2java', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  dialect: 'mysql'
});

// Exportez l'instance Sequelize pour l'utiliser dans d'autres fichiers
module.exports = sequelize;
