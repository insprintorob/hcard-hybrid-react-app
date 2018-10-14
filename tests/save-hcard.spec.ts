import saveHCard from "../src/save-hcard";
import HCard from "../src/hcard";

/**
 * Mocking multiple async functions that return Promises
 */
jest.mock('../src/hcard-repository', function() {
    return {
        default : {
            addOne : async function() {
                return Promise.resolve();
            }
        }
    };
});

jest.mock('../src/recent-hcard-repository', function() {
    return {
        default : {
            addOne : async function() {
                return Promise.resolve()
            },
            deleteAll : async function() {
                return Promise.resolve();
            }
        }
    };
});

// Testing an async function that returns a Promise using the new async/await
describe('Save HCard should take the HCard data and save it', () => {
    it('Should save the HCard', async () => {
        let hCard = new HCard();
        await saveHCard(hCard);
        return Promise.resolve();
    });
});