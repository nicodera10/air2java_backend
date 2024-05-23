const { AppUser } = require('../models/appuser');
const bcrypt = require('bcrypt');

exports.getAllAppuser = async (req, res) => {
  try {
    const userType = req.headers['user-type'];

    const users = await AppUser.findAll();

    const formattedUsers = users.map(user => {
      return {
        id_appuser: user.id_appuser,
        name: user.name_appuser,
        type: user.type_appuser
      };
    });

    res.json(formattedUsers);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(403).json({ error: error.message });
  }
};


exports.createAppUser = async (req, res) => {
  const { name, type, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const lastUser = await AppUser.findOne({
      order: [['id_appuser', 'DESC']]
    });
    const newId = lastUser ? lastUser.id_appuser + 1 : 1;

    const newUser = await AppUser.create({
      id_appuser: newId,
      name_appuser: name,
      type_appuser: type,
      password_appuser: hashedPassword
    });

    res.status(201).json({
      id_appuser: newUser.id_appuser,
      name: newUser.name_appuser,
      type: newUser.type_appuser
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};