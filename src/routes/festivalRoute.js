const express = require("express");
const router = express.Router();

const festivalModel = process.env.FESTIVAL_MODEL
require('.' + festivalModel);

const festivalController = process.env.FESTIVAL_CONTROLLER;
const festivalCtrl = require('.' + festivalController);

router.get('/', festivalCtrl.getAllFestivals);

// Ajoutez une route pour obtenir les 3 derniers festivals en date
router.get('/latest', festivalCtrl.getLatestFestivals);

module.exports = router;