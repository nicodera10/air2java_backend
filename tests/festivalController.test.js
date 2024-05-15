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
