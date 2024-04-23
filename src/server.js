const express = require('express');

const app = express();

// Définissez ici vos routes et middlewares

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});