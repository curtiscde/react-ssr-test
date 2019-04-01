import express from 'express';

const app = express();
// const apiRoutes = express.Router();

const port = process.env.PORT || 8080;

console.log('App started');

app.listen(port);
console.log(`App listening on port ${port}`);