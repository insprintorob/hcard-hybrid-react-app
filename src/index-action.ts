import html from './html';
import { Request, Response } from 'express';

export default function indexAction(request : Request, response: Response) {
    response.send(html);
}
