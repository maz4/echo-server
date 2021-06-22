import express, { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { formHandler, getData } from '../routes';

const upload = multer({ dest: '../dump' });

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/tokyo-booking', getData);

app.post('/tokyo-booking', upload.none(), formHandler);

// Serve compiled chunk
app.use(express.static(path.join(__dirname, '../build')));

export default app;
