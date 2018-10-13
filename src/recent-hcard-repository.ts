import { createRepository } from 'mongo-container';
import mongoContainer from './mongo-container';

const recentHCardRepository = createRepository(mongoContainer, 'recentHCard');

export default recentHCardRepository;