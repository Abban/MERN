import express, {request} from 'express';
import bodyParser from "body-parser";
import logger from './middleware/logger';
import authentication from "./middleware/authentication";
import MemberRoutes from './routes/members';
import CompositionRoutes from './routes/compositions';
require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(authentication);
app.use(logger);
const port = process.env.PORT;

MemberRoutes(app);
CompositionRoutes(app);

app.get('/', (request, response) => response.send('Hello World\n'));

app.listen(port, () =>
    console.log(`App is listening on ${port}!`)
);