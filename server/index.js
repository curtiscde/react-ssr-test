import express from 'express';
import Html from './htmlHelper';

const app = express();
const port = process.env.PORT || 8080;

console.log('App started');

app.get('/', (req, res) => {

    res.send(
        Html({
            body: 'hello world',
            title: 'hello world',
        })
    );
});

app.listen(port);
console.log(`App listening on port ${port}`);