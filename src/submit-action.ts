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
    // Validate everything, or render an error page with a "Try Again" link if the passed in data is invalid

    // Sanitize all data for security

    // Parse the request and create a HCard

    // Pass off to saveHcard, which will handle all of the database logic itself. This is a request handler and should not handle database operations directly, or even know what a database is.

    response.redirect('/');
}