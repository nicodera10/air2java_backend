const request = require('supertest');
const app = require('../src/server');

describe('GET /festival', () => {
  it('responds with JSON containing all festivals', async () => {
    const response = await request(app).get('/festival');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

describe('GET /festival/latest', () => {
  it('responds with JSON containing the latest festivals', async () => {
    const response = await request(app).get('/festival/latest');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

describe('GET /festival/:id', () => {
    it('responds with JSON containing the details of a specific festival', async () => {
      // Supposons que vous ayez un ID de festival valide dans votre base de données
      const festivalId = 1;
  
      const response = await request(app).get(`/festival/${festivalId}`);
      
      // Vérifiez le statut de la réponse
      expect(response.statusCode).toBe(200);
      
      // Vérifiez si la réponse contient les détails du festival
      expect(response.body).toBeTruthy();
      expect(response.body.id_fest).toBe(festivalId); // Assurez-vous que les détails correspondent à l'ID du festival demandé
      // Vous pouvez également ajouter d'autres attentes pour les détails du festival en fonction de votre implémentation
    });
  
    it('responds with 404 if the festival does not exist', async () => {
      // Supposons que vous ayez un ID de festival qui n'existe pas dans votre base de données
      const invalidFestivalId = 999;
  
      const response = await request(app).get(`/festival/${invalidFestivalId}`);
      
      // Vérifiez si la réponse est une erreur 404 (Not Found)
      expect(response.statusCode).toBe(404);
    });
  });