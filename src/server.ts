import express from 'express';
import '@controllers/UserController';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(3333);
