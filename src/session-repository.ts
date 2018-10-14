import { createRepository } from 'mongo-container';
import mongoContainer from './mongo-container';

const sessionRepository = createRepository(mongoContainer, 'session');

export default sessionRepository;