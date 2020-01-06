import mongoose from "mongoose";

const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log('mongodb://' + host + '/' + database);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + host + '/' + database, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    user: username,
    pass: password
}).catch(error => {
    console.error(error);
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Database connection is open!');
});

export default db;