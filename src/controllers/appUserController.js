//loiacono_nicolas_adj_api/src/controllers/appUserController.js

const { AppUser } = require('../models/appuser');

exports.getAllAppuser = async (req, res) => {
  try {
      //récupérez les utilisateurs de la base de données
      const users = await AppUser.findAll();

      // Transformez les données pour les formater différemment
      const formattedUsers = users.map(user => {
        return {
          id_appuser: user.id_appuser,
          name: user.name_appuser,
          type: user.type_appuser
        };

      // Envoyez les utilisateurs au format JSON en tant que réponse à la requête HTTP
      
    });
    res.json(formattedUsers);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(403).json({ error: error.message });
  }
};
