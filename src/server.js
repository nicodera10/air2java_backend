// src/server.js
const express = require('express');
const sequelize = require('./config/sequelize');
const dotenv = require('dotenv');
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

// Configurez ici vos middlewares


/**
 * Routers
 */
app.use('/appuser', appuserRouter);
app.use('/festival', festivalRouter);
app.use('/band', bandRouter);
app.use('/person', personRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
