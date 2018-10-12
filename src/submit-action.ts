import { Request, Response } from "express";
import * as validator from 'validator';

/**
 * Handle the submit action. This is a "Controller Action" in the MVC design pattern.
 *
 * Whats this WILL do:
 * Validate and sanitize input
 * Generate a HCard object with data from the Request
 * Pass off the HCard object to saveHCard, which will handle the database operations as it sees fit.
 *
 * What this WILL NOT do:
 * Direct database operations. Thats not the job of a request handler.
 *
 * This module can be plugged into the "/submit" express route directly.
 * All the logic to handle the submit route is abstraced away into this function.
 *
 * @param request
 * @param response
 */
export default function submitAction(request: Request, response: Response) : void {
    // Validate everything that needs validation, or return HTTP Code 422 (Unprocessable Entity) and render an error page with a "Try Again" link if the passed in data is invalid
    if (validator.isEmail(request.body.email) === false) {
        response.status(422);
        response.render('error.ejs', {
            error : {
                code : request.statusCode,
                message : "Invalid Email"
            }
        });
    }

    // Sanitize all data for security

    // Parse the request and create a HCard

    // Pass off to saveHcard, which will handle all of the database logic itself. This is a request handler and should not handle database operations directly, or even know what a database is.

    //response.redirect('/');
}