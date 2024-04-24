// src/server.js
const express = require('express');
const sequelize = require('./config/sequelize');

const app = express();

// Configurez ici vos routes et middlewares

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
