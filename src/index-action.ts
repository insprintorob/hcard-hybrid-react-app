import html from './html';
import { Request, Response } from 'express';
import getHTML from './react-ssr';

export default function indexAction(request : Request, response: Response) {
    getHTML().then((html : string) => {
        response.send(html);
    });
}
