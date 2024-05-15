//loiacono_nicolas_adj_api/src/controllers/authMiddleware.js

const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        
        // Vérifiez le contenu du token, y compris user.type_appuser
        if (decoded.userType !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Not an admin user' });
        }
        // Si l'utilisateur est authentifié et est un administrateur, passez à la prochaine étape
        next();
    });
};
