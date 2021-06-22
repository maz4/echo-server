import supertest from 'supertest';
import propertiesData from '../../../data/propertiesData';
import app from '../server';

const request = supertest(app);

it('Get tokyo-booking properties', async () => {
    const response = await request.get('/tokyo-booking');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(propertiesData);
});

it('Post tokyo-booking new property and sends back object with the same data', async () => {
    const response = await request
        .post('/tokyo-booking')
        .field('title', 'abcd')
        .field('address', '400, 400');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        title: 'abcd',
        address: '400, 400',
    });
});
