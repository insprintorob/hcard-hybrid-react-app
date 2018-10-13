import { Request, Response } from "express";
import * as validator from 'validator';
import HCard from "./hcard";
import saveHCard from "./save-hcard";

const sanitize = require('mongo-sanitize');

/**
 * Request handler for the submit action
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
    let body = request.body;

    // Do some basic validation, or return HTTP Code 422 (Unprocessable Entity) and render an error page with a "Try Again" link if the passed in data is invalid
    let validationError = {
        code : 422,
        message : undefined
    };

    // I could do more in depth validation if I had more time (compare state to an array of valid states for example)
    validationError.message = validator.isEmail(body.email) === false ? 'Invalid Email' : undefined;
    validationError.message = validator.isNumeric(body.phone) === false ? 'Invalid Phone Number' : undefined;
    validationError.message = validator.isNumeric(body.postcode) === false || body.postcode.length !== 4 ? 'Invalid Postcode' : undefined;

    if (validationError.message !== undefined) {
        response.status(422);
        response.render('error.ejs', validationError);
    }

    // Sanitize all data for security
    body.postcode = parseInt(body.postcode);
    body.phone = sanitize(body.phone);
    body.givenName = sanitize(body.givenName);
    body.surname = sanitize(body.surname);
    body.email = sanitize(body.email);
    body.houseNumber = sanitize(body.houseNumber);
    body.street = sanitize(body.street);
    body.suburb = sanitize(body.suburb);
    body.state = sanitize(body.state);
    body.postcode = sanitize(body.postcode);
    body.country = sanitize(body.country);

    // Create a HCard. Using setters for IDE autocomplete (and hinting if the wrong types are passed)
    let hCard = new HCard();
    hCard
        .setGivenName(body.givenName)
        .setSurname(body.surname)
        .setEmail(body.email)
        .setPhone(body.phone)
        .setHouseNameOrNumber(body.houseNumber)
        .setStreet(body.street)
        .setSuburb(body.suburb)
        .setState(body.state)
        .setPostcode(body.postcode)
        .setCountry(body.country);

    // Pass it off to saveHcard, which will handle the database operations
    saveHCard(hCard).then(() => {
        response.redirect('/');
    }).catch((error : Error) => {
        response.status(500);
        response.render('error.ejs', {
            code : 500,
            message : JSON.stringify(error)
        });
    });
}