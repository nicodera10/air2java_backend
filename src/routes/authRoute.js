const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { AppUser } = require('../models/appuser');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await AppUser.findOne({ where: { name_appuser: username } });

    if (!user) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }

    const passwordMatch = await bcrypt.compare(password, user.password_appuser);

    if (!passwordMatch) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }

    const tokenPayload = { userId: user.id_appuser, userType: user.type_appuser };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true, secure: true, path: '/', sameSite: 'Lax',  maxAge: 900000 });

    res.json({ userName: user.name_appuser, userType: user.type_appuser });

  } catch (error) {
    console.error('Erreur de connexion :', error);
    res.status(401).json({ error: error.message });
  }
});

router.post('/logout', async (req, res) => {
  res.clearCookie('token', { path: '/' });
  res.status(200).send('Logged out');
})

module.exports = router;
