import dotenv from 'dotenv';
dotenv.config();

import { initMongoDB } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoDB();
    setupServer();
  } catch (error) {
    console.error('Error while setting up mongo connection', error);
  }
};

bootstrap();
