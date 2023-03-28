const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../src/models/user');
const { dbUri } = require('../src/config/config.test')

describe('User endpoints', () => {
    beforeAll(async () => {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterEach(async () => {
        await User.deleteMany();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('POST http://localhost:3000/api/users', () => {
        test('Should create a new user', async () => {
            const newUser = {
                username: 'testuser',
                password: 'testpassword',
                email: 'testuser@example.com',
                avatar: 'https://example.com/avatar.jpg',
                role: 'user',
                isVerified: true,
            };


            const res = await request(app).post('/api/users').send(newUser).expect(201);

            expect(res.body).toMatchObject(newUser);

            const user = await User.findOne({ email: 'testuser@example.com' });
            expect(user).not.toBeNull();
            expect(user.username).toBe('testuser');
            expect(user.role).toBe('user');
            expect(user.isVerified).toBe(true);
        });

        test('Should return a 400 if the input is invalid', async () => {
            const invalidUser = {
                username: '123',
                password: '123',
                email: 'invalidemail',
            };

            const res = await request(app)
                .post('/users')
                .send(invalidUser)
                .expect(400);

            expect(res.body.error).toBe('Bad Request');
        });

        test('Should return a 409 if the username or email already exists', async () => {
            const existingUser = {
                username: 'existinguser',
                password: 'testpassword',
                email: 'existinguser@example.com',
                avatar: 'https://example.com/avatar.jpg',
                role: 'user',
                isVerified: true,
            };
            await User.create(existingUser);

            const newUser = {
                username: 'existinguser',
                password: 'testpassword',
                email: 'newuser@example.com',
                avatar: 'https://example.com/avatar.jpg',
                role: 'user',
                isVerified: true,
            };


            const res = await request(app).post('/users').send(newUser).expect(409);

            expect(res.body.error).toBe('Conflict');
        });
    });
});
