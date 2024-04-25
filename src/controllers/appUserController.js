const { AppUser } = require('../models/appuser');

exports.getAllAppuser = async (req, res) => {
  try {
      // Utilisez la méthode Sequelize findAll() pour récupérer tous les enregistrements de la table appuser
      const users = await AppUser.findAll();
  
      // Transformez les données pour les formater différemment
      const formattedUsers = users.map(user => {
          return {
              id_appuser: user.id_appuser,
              type: {
                  name: user.name_appuser,
                  password: user.password_appuser,
                  type: user.type_appuser
              }
          };
      });
  
      // Envoyez le JSON en tant que réponse à la requête HTTP
      res.json(formattedUsers);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    };
};
