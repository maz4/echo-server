import supertest from 'supertest';
import propertiesData from '../../../data/propertiesData';
import app from '../server';

const request = supertest(app);

const testData = {
    title: 'abcd',
    address: '400, 400',
};

describe('GET /tokyo-booking', () => {
    it('Get tokyo-booking properties', async () => {
        const response = await request.get('/tokyo-booking');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(propertiesData);
    });
});

describe('POST /tokyo-booking', () => {
    it('Post tokyo-booking new property as form data', async () => {
        const response = await request
            .post('/tokyo-booking')
            .field('title', 'abcd')
            .field('address', '400, 400');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(testData);
    });

    it('Post tokyo-booking new property as json', async () => {
        const response = await request
            .post('/tokyo-booking')
            .send(testData)
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(testData);
    });

    it('Post tokyo-booking return empty object if no data sent', async () => {
        const response = await request
            .post('/tokyo-booking')
            .send({})
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});
