import express from 'express';
import bodyParser from "body-parser";
import logger from './middleware/logger';
import authentication from "./middleware/authentication";

import composition from './mocks/composition';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(authentication);
app.use(logger);
const port = process.env.PORT;

app.get('/api/v1/composition', (request, response) => {
    response.send(composition);
});

app.post('/api/v1/composition', (request, response) => {
    const name = request.body.name;

    console.log(name);

    response.status(200);
});

app.put('/api/v1/composition/:id', (request, response) => {
    const id = request.params.id;
    const name = request.body.name;

    console.log(id);
    console.log(name);

    response.status(200).end();
});

app.delete('/api/v1/composition/:id', (request, response) => {
    console.log(request.params.id);

    response.status(200).end();
});



app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () =>
    console.log(`App is listening on ${port}!`)
);