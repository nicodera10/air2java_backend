const { Band } = require('../models/band');

exports.getAllBands = async (req, res) => {
    try {
        const bands = await Band.findAll();
    
        const formattedBands = bands.map(band => {
            return {
                id: band.id_band,
                name: band.name_band,
            };
        });
    
        res.json(formattedBands);
    } catch (error) {
        console.error('Erreur lors de la récupération des groupes :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des groupes' });
    };
};
