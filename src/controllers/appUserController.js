const { AppUser } = require('../models/appuser');

exports.getAllAppuser = async (req, res) => {
  try {
    const userType = req.headers['user-type']; // Récupérer l'en-tête User-Type
    console.log('User-Type:', userType); // Pour déboguer et vérifier que l'en-tête est bien reçu

    // Ajoutez ici la logique pour vérifier ou utiliser le userType si nécessaire
    if (userType !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Not an admin user' });
    }

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
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(403).json({ error: error.message });
  }
};
