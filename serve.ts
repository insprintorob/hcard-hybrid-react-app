import * as express from 'express';
import submitAction from './src/submit-action';
import indexAction from './src/index-action';

/**
 * Initialise express
 */
let app = express();
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

app.listen(8080);