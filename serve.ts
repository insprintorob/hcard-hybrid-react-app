import * as express from 'express';
import html from './src/html';
import { Request, Response } from 'express';
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
 * Define routes and handlers.
 * All handlers except simple one liners should be abstracted away into modules to allow for proper unit testing and mocking
 */
app.get('/', (request: Request, response: Response) => response.send(html));
app.post('/submit', submitAction);

app.listen(8080);