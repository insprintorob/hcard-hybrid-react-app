import * as express from 'express';
import * as cookieSession from 'cookie-session';
import submitAction from './src/submit-action';
import indexAction from './src/index-action';
import updateAction from './src/update-action';
import config from './config';

/**
 * Initialise express
 */
let app = express();

let session = cookieSession({
  name: 'session',
  secret: '382479oiejfi59873yef8y89753897yefriueyfr9237r98hf9832',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
});

app.set('trust proxy', 1);
app.use(session);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

/**
 * Serve dist assets statically
 */
app.use(express.static('dist'));

/**
 * Define routes and handlers.
 * All handlers except simple one liners should be abstracted away into modules to allow for proper unit testing and mocking
 */
app.get('/', indexAction);
app.post('/submit', submitAction);
app.post('/update', updateAction); // Lets plug an async function into express, because why not?

app.listen(config.server.port, () => {
  console.log('HCard builder Hybrid SSR/SPA app listening on port ' + config.server.port);
});