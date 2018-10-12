/**
 * This module will grab the HCard SPA and render it.
 *
 * It exports a single string as an ES6 module, with the HTML output.
 * This can then be rendered by anything you like, such as express, which wont have to worry about any of the construction code in here.
 * it can simply render the string its given
 */
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