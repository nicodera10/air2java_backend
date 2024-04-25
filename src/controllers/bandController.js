// Importez le modèle Band
const { Band } = require('../models/band');

exports.getAllBands = async (req, res) => {
    try {
        // Utilisez la méthode Sequelize findAll() pour récupérer tous les enregistrements de la table band
        const bands = await Band.findAll();
    
        // Vous pouvez formater les données si nécessaire
        // Par exemple, si vous voulez renvoyer uniquement les noms des groupes
        const formattedBands = bands.map(band => {
            return {
                id: band.id_band,
                name: band.name_band,
                // Ajoutez d'autres propriétés si nécessaire
            };
        });
    
        // Envoyez les données formatées en tant que réponse JSON à la requête HTTP
        res.json(formattedBands);
    } catch (error) {
        console.error('Erreur lors de la récupération des groupes :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des groupes' });
    };
};
