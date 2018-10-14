import indexAction from "../src/index-action";

/**
 * Useful trick to mock ES6 modules
 */
jest.mock('../src/react-ssr', function() {
    return {
        default : function() {
            return Promise.resolve('<html><head></head><body>Mock HTML</body></html>');
        }
    };
});

describe('Index Action is a single purpose module and should take the HTML it is given by getHTML() and render it', () => {
    it('should render HTML from getHTML()', () => {
        const request = {};
        const response = {
            send : function () {}
        };

        indexAction(request, response);
    });
});