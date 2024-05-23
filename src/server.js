const express = require('express');
const sequelize = require('./config/sequelize');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
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

const authRoutes = require('./routes/authRoute');

const options = {
  key: fs.readFileSync('./src/config/localhost-key.pem'),
  cert: fs.readFileSync('./src/config/localhost.pem')
};

const server = https.createServer(options, app);

/**
 * Middlewares
 */ 

app.use(cookieParser());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Credentials, User-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Gérer les pré-vérifications CORS (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.setHeader('Content-Type', 'application/json');
    res.sendStatus(200);
  } else {
    next();
  }
});






/**
 * Routers
 */

app.use('/auth', authRoutes);

app.use('/appuser', appuserRouter);
app.use('/festival', festivalRouter);
app.use('/band', bandRouter);
app.use('/person', personRouter);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 443;
  const server = https.createServer(options, app);
  server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
}