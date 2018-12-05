let app = require('../server');
let testServer = require('supertest');

describe('Test server routes', () => {
    test('lets see if we get our default app page', async () => {
        const response = await testServer(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('react-root');
    });

    test('check the login route returns status OK', async() => {
        const response = await testServer(app).post('/api/user/logout');
        expect(response.statusCode).toBe(200);
    })
})