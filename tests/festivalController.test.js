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
      const festivalId = 1;
  
      const response = await request(app).get(`/festival/${festivalId}`);
      
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeTruthy();
      expect(response.body.id_fest).toBe(festivalId);
    });
  
    it('responds with 404 if the festival does not exist', async () => {
      const invalidFestivalId = 999;
  
      const response = await request(app).get(`/festival/${invalidFestivalId}`);
      
      expect(response.statusCode).toBe(404);
    });
  });