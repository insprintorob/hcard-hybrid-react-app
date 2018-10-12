import { MongoContainer } from 'mongo-container';

/**
 * In a production app I would configure this in a TOML config file
 * There would be environment specific config files also, to override server addresses for different environments
 */
const mongoContainer = new MongoContainer(
    {
        database : {
            uri : 'mongodb://127.0.0.1:27017',
            name : 'hcard-app'
        }
    }
);

export default mongoContainer;