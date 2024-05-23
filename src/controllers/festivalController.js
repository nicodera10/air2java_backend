const { Festival } = require('../models/festival');

exports.getAllFestivals = async (req, res) => {
    try {
        const festivals = await Festival.findAll();

        res.json(festivals);
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des festivals' });
    }
};

exports.getLatestFestivals = async (req, res) => {
    try {
        const latestFestivals = await Festival.findAll({
            order: [['end_date_fest', 'DESC']],
            limit: 3
        });
        res.json(latestFestivals);
    } catch (error) {
        console.error('Erreur lors de la récupération des festivals :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des festivals' });
    }
};

exports.getOneFestival = async (req, res, next) => {
    try {
        const { id } = req.params;

        const festival = await Festival.findByPk(id);

        if (!festival) {
            return res.status(404).json({ message: "Festival not found" });
        }

        res.json(festival);
    } catch (error) {
        console.error('Error retrieving festival:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

