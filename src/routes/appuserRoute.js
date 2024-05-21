//loiacono_nicolas_adj_api/src/routes/appuserRoute.js
const express = require("express");
const router = express.Router();

const appuserModel = process.env.APPUSER_MODEL
require('.' + appuserModel);

const appuserController = process.env.APPUSER_CONTROLLER;
const appuserCtrl = require('.' + appuserController);

const authMidlleware = process.env.AUTH_MIDDLEWARE;
const { verifyToken } = require('.' + authMidlleware);

router.get('/', verifyToken, appuserCtrl.getAllAppuser);
router.post('/', verifyToken, appuserCtrl.createAppUser);

module.exports = router;