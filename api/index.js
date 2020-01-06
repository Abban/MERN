import express, {request} from 'express';
import bodyParser from "body-parser";
import logger from './middleware/logger';
import authentication from "./middleware/authentication";
import { CompositionModel } from "./models/Composition";
import db from './db';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(authentication);
app.use(logger);
const port = process.env.PORT;

app.get('/v1/composition', async (request, response) => {
    const compositions = await CompositionModel.find() || [];
    response.send(compositions);
});

app.get('/v1/composition/:id', async (request, response) => {
    try {
        const composition = await CompositionModel.findById(request.parameters.id);
        if(composition) {
            response.send(composition);
        } else {
            response.status(404).end();
        }
    } catch (e) {
        response.status(404).end();
    }
});

app.post('/v1/composition', (request, response) => {
    const name = request.body.name;

    console.log(name);

    response.status(200);
});

app.put('/v1/composition/:id', (request, response) => {
    const id = request.params.id;
    const name = request.body.name;

    console.log(id);
    console.log(name);

    response.status(200).end();
});

app.delete('/v1/composition/:id', (request, response) => {
    console.log(request.params.id);

    response.status(200).end();
});

app.get('/', (request, response) => response.send('Hello World\n'));

app.listen(port, () =>
    console.log(`App is listening on ${port}!`)
);