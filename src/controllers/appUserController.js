const { AppUser } = require('../models/appuser');
const bcrypt = require('bcrypt');

exports.getAllAppuser = async (req, res) => {
  try {
    const userType = req.headers['user-type']; // Récupérer l'en-tête User-Type

    // Ajoutez ici la logique pour vérifier ou utiliser le userType si nécessaire
    /*if (userType !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Not an admin user' });
    }*/

    // Récupérez les utilisateurs de la base de données
    const users = await AppUser.findAll();

    // Transformez les données pour les formater différemment
    const formattedUsers = users.map(user => {
      return {
        id_appuser: user.id_appuser,
        name: user.name_appuser,
        type: user.type_appuser
      };
    });

    // Envoyez les utilisateurs au format JSON en tant que réponse à la requête HTTP
    res.json(formattedUsers);
  } catch (error) {
    //console.error('Erreur lors de la récupération des utilisateurs :', error);
    //res.status(403).json({ error: error.message });
  }
};


exports.createAppUser = async (req, res) => {
  const { name, type, password } = req.body;

  try {
    // Hacher le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10);

    // Obtenir le dernier id_appuser de la base de données
    const lastUser = await AppUser.findOne({
      order: [['id_appuser', 'DESC']]
    });
    const newId = lastUser ? lastUser.id_appuser + 1 : 1; // Si aucun utilisateur, commencer à 1

    // Créer un nouvel utilisateur dans la base de données
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