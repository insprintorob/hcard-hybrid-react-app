import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

global['React'] = React;
var hCardComponent = require('../dist/main.js').default;

var html = ReactDOMServer.renderToStaticMarkup(
  React.createElement(
    hCardComponent
  )
);

export default html;