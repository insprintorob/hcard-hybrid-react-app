import { MongoContainer } from 'mongo-container';
import config from '../config';

/**
 * In a production app I would configure this in a TOML config file
 * There would be environment specific config files also, to override server addresses for different environments
 */
const mongoContainer = new MongoContainer(
    {
        database : {
            uri : config.database.uri,
            name : config.database.name
        }
    }
);

export default mongoContainer;