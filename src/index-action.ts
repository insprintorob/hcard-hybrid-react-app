import { Request, Response } from 'express';
import getHTML from './react-ssr';

/**
 * Render the HTML output of the SSR React app from getHTML()
 *
 *
 * Request and Response can be mocked for testing
 * @param request Request | any
 * @param response Response | any
 */
export default function indexAction(request : Request | any, response: Response | any) {
    getHTML().then((html : string) => {
        response.send(html);
    });
}
