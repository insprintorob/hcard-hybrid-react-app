import * as express from 'express';
import html from './src/html';
import { Request, Response } from 'express';


let app = express();

app.get('/', (request: Request, response: Response) => response.send(html));

app.listen(8080);