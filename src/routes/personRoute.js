const express = require("express");
const router = express.Router();

const personModel = process.env.PERSON_MODEL
require('.' + personModel);

const personController = process.env.PERSON_CONTROLLER;
const personCtrl = require('.' + personController);

router.get('/', personCtrl.getAllPersons);

module.exports = router;