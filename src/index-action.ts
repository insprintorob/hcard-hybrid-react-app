import { Request, Response } from 'express';
import getHTML from './react-ssr';

export default function indexAction(request : any, response: any) {
    getHTML().then((html : string) => {
        response.send(html);
    });
}
