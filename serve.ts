import * as express from 'express';
import html from './src/html';
import { Request, Response } from 'express';


let app = express();


app.use(express.static('dist'));
app.get('/', (request: Request, response: Response) => response.send(html));
app.post('/submit', (request: Request, response: Response) => {
    response.redirect('/');
});

app.listen(8080);