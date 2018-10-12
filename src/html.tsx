import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import HTMLDocument from 'react-html-document';

global['React'] = React;
var HCardComponent = require('../dist/main.js').default;

var doc = (
  <HTMLDocument
    title="hCard SSR app"
    stylesheets={['css/bootstrap.min.css', 'css/main.css']}
  >
    <HCardComponent></HCardComponent>
  </HTMLDocument>
)

var html = ReactDOMServer.renderToStaticMarkup(
  doc
);

export default html;