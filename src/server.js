//loiacono_nicolas_adj_api/src/server.js
const express = require('express');
const sequelize = require('./config/sequelize');
const dotenv = require('dotenv');
const https = require('https'); // Import du module https
const fs = require('fs'); // Import du module fs pour la lecture des fichiers
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

const appuserRoutesPath = process.env.APPUSER_ROUTES;
const appuserRouter = require(appuserRoutesPath);

const festivalRoutesPath = process.env.FESTIVAL_ROUTES;
const festivalRouter = require(festivalRoutesPath);

const bandRoutesPath = process.env.BAND_ROUTES;
const bandRouter = require(bandRoutesPath);

const personRoutesPath = process.env.PERSON_ROUTES;
const personRouter = require(personRoutesPath);

// Import des routes d'authentification
const authRoutes = require('./routes/authRoute');

// Charger le certificat et la clé privée
const options = {
  key: fs.readFileSync('./src/config/localhost-key.pem'),
  cert: fs.readFileSync('./src/config/localhost.pem')
};

// Créer un serveur HTTPS au lieu d'utiliser app.listen()
const server = https.createServer(options, app);

// Configurez ici vos middlewares

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour les CORS
// Configurez les en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Credentials');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Gérer les pré-vérifications CORS (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.setHeader('Content-Type', 'application/json'); // Réponse en JSON pour les requêtes OPTIONS
    res.sendStatus(200); // Répondre uniquement aux demandes OPTIONS avec un statut 200
  } else {
    next();
  }
});






/**
 * Routers
 */

// Utilisation des routes d'authentification
app.use('/auth', authRoutes);

app.use('/appuser', appuserRouter);
app.use('/festival', festivalRouter);
app.use('/band', bandRouter);
app.use('/person', personRouter);

// Lancement du serveur HTTPS
const PORT = process.env.PORT; // Utilisation du port 443 par défaut pour HTTPS
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
