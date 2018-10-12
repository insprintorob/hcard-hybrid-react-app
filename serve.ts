import * as express from 'express';
import html from './src/html';
import { Request, Response } from 'express';


let app = express();


app.use(express.static('dist'));
app.get('/', (request: Request, response: Response) => response.send(html));
app.post('/submit', )

app.listen(8080);