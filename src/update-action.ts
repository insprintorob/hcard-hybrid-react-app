import { Request, Response } from 'express';
import sessionRepository from './session-repository';

const sanitize = require('mongo-sanitize');
const uniqId = require('uniqid');

/**
 * Handle posts to /update and store user data in the session and write the session to mongodb as a backup
 *
 * @param request
 * @param response
 */
export default async function updateAction(request : Request | any, response : Response | any) {
    // Generate a unique session Id for this form, or use the existing one
    request.session = request.session || {}; // For unit tests/other environments where the session object may exist (were saving to the database anyway)
    const sessionId = request.session.sessionId || uniqId();
    request.session.sessionId = sessionId;
    // Tip: Did you know using let in a for loop forces the JavaScript interpereter to redeclare the variable for every iteration? Use var to avoid this
    for (var attribute in request.body) {
        let value : string = request.body[attribute];
        request.session[attribute] = sanitize(value);
    }

    let sessionToSave = {
        sessionId : sessionId,
        givenName : request.session.givenName || '',
        surname : request.session.surname || '',
        email : request.session.email || '',
        phone : request.session.phone || '',
        houseNumber : request.session.houseNumber || '',
        street : request.session.street || '',
        suburb : request.session.suburb || '',
        state : request.session.state || '',
        postcode : request.session.postcode || '',
        country : request.session.country || ''
    };

    /**
     * Because this particular database access has to do with request handling and the session, its perfectly fine to access the database repository directly from here
     */
    try {
        let collection = await sessionRepository.getCollection();
        collection.update(
            {
                sessionId : sessionId
            },
            sessionToSave,
            {
                upsert : true
            }
        );
    } catch (error) {
        response.json({
            success : false,
            error: JSON.stringify(error)
        });
    }

    response.json({
        success : true
    });

    return Promise.resolve(); // This line is needed, or the function will never stop running in the background due to the Promise never resolving.
}