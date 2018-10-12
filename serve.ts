import * as express from 'express';
import html from './src/html';
import { Request, Response } from 'express';
import saveHCard from './src/save-hcard';
import submitAction from './src/submit-action';

/**
 * Initialise express
 */
let app = express();

/**
 * Serve dist assets statically
 */
app.use(express.static('dist'));

/**
 *
 */
app.get('/', (request: Request, response: Response) => response.send(html));
app.post('/submit', submitAction);

app.listen(8080);