import updateAction from "../src/update-action";

// Mocking nested async functions with Promises
jest.mock('../src/session-repository', function() {
    return {
        default : {
            getCollection : async function() {
                return Promise.resolve({
                    update : async function(
                        query : any,
                        data : any,
                        options : any
                    ) {
                        return Promise.resolve();
                    }
                });
            }
        }
    };
});

describe('Update action should take data from the form AJAX request then save it to the session, then back this data up in MongoDB', () => {
    it('should render HTML from getHTML()', () => {
        const request = {};
        const response = {
            json : function (data : any) {}
        };

        updateAction(request, response);
    });
});