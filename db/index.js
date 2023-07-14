import { makeDb } from '../src/data-access/index.js';
import dotenv from 'dotenv';

dotenv.config();

// initializes the database collection if it does not exist already
(async function setupDb () {
  console.log('Setting up database...')
  // indexes will only be added if they don't exist
  const db = await makeDb()
  const result = await db
    .collection('books')
    .createIndexes([
      { key: { hash: 1 }, name: 'hash_idx' },
    ]);
  console.log('Database setup complete...')
  process.exit()
})()