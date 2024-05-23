const express = require("express");
const router = express.Router();

const festivalModel = process.env.FESTIVAL_MODEL
require('.' + festivalModel);

const festivalController = process.env.FESTIVAL_CONTROLLER;
const festivalCtrl = require('.' + festivalController);

router.get('/', festivalCtrl.getAllFestivals);

router.get('/latest', festivalCtrl.getLatestFestivals);

router.get('/:id',festivalCtrl.getOneFestival);

module.exports = router;