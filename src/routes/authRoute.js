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
      throw new Error('Nom d\'utilisateur  incorrect');
    }

    // Vérifiez si le mot de passe est correct en le comparant avec le hash stocké
    const passwordMatch = await bcrypt.compare(password, user.password_appuser);

    if (!passwordMatch) {
      throw new Error('mot de passe incorrect');
    }

    // Générez le token JWT
    const token = jwt.sign({ userId: user.id_appuser, userType: user.type_appuser }, process.env.JWT_SECRET, { expiresIn: '1h' });


    // Si les identifiants sont corrects, renvoyez les données de l'utilisateur
    res.json({ token });
  } catch (error) {
    console.error('Erreur de connexion :', error);
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
