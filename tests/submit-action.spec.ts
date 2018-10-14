import submitAction from "../src/submit-action";
import HCard from "../src/hcard";

/**
 * Useful trick to mock ES6 modules
 */
jest.mock('../src/save-hcard', function() {
    return {
        default : function(hCard : HCard) {
            return Promise.resolve();
        }
    };
});

describe('Submit Action is a single purpose module and should take the submitted HCard data and call the saveHCard() service module to save it instead of saving it to mongodb directly', () => {
    it('should render HTML from getHTML()', () => {
        const request = {
            body : {
                phone : '0444333222',
                givenName : 'John',
                surname : 'Smith',
                email : 'john.smith@test.com',
                houseNumber : '1',
                street : 'george st',
                suburb : 'Sydney',
                state : 'NSW',
                postcode : '2222',
                country : 'Australia'
            }
        };
        const response = {
            status : function (code) {},
            render : function (template : string, data : any) {}
        };

        submitAction(request, response);
    });
});