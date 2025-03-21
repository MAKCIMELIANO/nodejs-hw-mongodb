import dotenv from 'dotenv';
dotenv.config();

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoDB();
    startServer();
  } catch (error) {
    console.error('Error while setting up mongo connection', error);
  }
};

bootstrap();
