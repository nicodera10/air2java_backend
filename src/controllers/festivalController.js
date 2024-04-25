const { Festival } = require('../models/festival');

exports.getAllFestivals = async (req, res) => {
    try {
        // Utilisez la méthode Sequelize findAll() pour récupérer tous les enregistrements de la table festival
        const festivals = await Festival.findAll();
    
        // Envoyez le JSON en tant que réponse à la requête HTTP
        res.json(festivals);
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des festivals' });
    }
};
