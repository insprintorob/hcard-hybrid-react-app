import { Request, Response } from "express";

/**
 * Handle the submit action. This is a "Controller Action" in the MVC design pattern.
 *
 * This module can be plugged into the "/submit" express route directly.
 * All the logic to handle the submit route is abstraced away into this function.
 *
 * @param request
 * @param response
 */
export default function submitAction(request: Request, response: Response) : void {
    response.redirect('/');
}