// src/routes/authRoute.js
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { AppUser } = require('../models/appuser');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Recherchez l'utilisateur par nom d'utilisateur
    const user = await AppUser.findOne({ where: { name_appuser: username } });

    if (!user) {
      throw new Error('Nom d\'utilisateur incorrect');
    }

    // Vérifiez si le mot de passe est correct en le comparant avec le hash stocké
    const passwordMatch = await bcrypt.compare(password, user.password_appuser);

    if (!passwordMatch) {
      throw new Error('Mot de passe incorrect');
    }

    // Générez le token JWT
    const tokenPayload = { userId: user.id_appuser, userType: user.type_appuser };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Renvoyer le token JWT dans un cookie sécurisé (httpsOnly)
    res.cookie('token', token, { httpOnly: true, secure: true });

    // Renvoyer le nom d'utilisateur dans le corps de la réponse
    res.json({ userName: user.name_appuser });

  } catch (error) {
    console.error('Erreur de connexion :', error);
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
