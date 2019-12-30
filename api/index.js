import express from 'express';
import composition from './mocks/composition';

const app = express();
const port = process.env.PORT;

app.get('/api/v1/composition', (request, response) => {
    response.send(composition);
});

app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () =>
    console.log(`App is listening on ${port}!`)
);