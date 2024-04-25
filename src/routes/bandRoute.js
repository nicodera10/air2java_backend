const express = require("express");
const router = express.Router();

const bandModel = process.env.BAND_MODEL
require('.' + bandModel);

const bandController = process.env.BAND_CONTROLLER;
const bandCtrl = require('.' + bandController);

router.get('/', bandCtrl.getAllBands);

module.exports = router;