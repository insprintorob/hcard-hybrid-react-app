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
import recentHCardRepository from './recent-hcard-repository';
import HCard from './hcard';

// Set up the naughty global
global['React'] = React;
var HCardComponent = require('../dist/main.js').default;

export default async function getHTML() : Promise<string> {
    const state = await recentHCardRepository.findOne({});

    var doc = (
        <HTMLDocument
            title="hCard SSR app"
            stylesheets={['css/bootstrap.min.css', 'css/main.css']}
            scripts={['redirect-spa.js']}
        >
            <HCardComponent {...state}/>
        </HTMLDocument>
    );

    var html = ReactDOMServer.renderToString(
        doc
    );

    return Promise.resolve(html);
}