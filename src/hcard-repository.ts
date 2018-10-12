import { createRepository } from 'mongo-container';
import mongoContainer from './mongo-container';

const hCardRepository = createRepository(mongoContainer, 'hCards');

export default hCardRepository;