import makeBooksDb from './books-db.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const url = process.env.DM_BOOKS_DB_URL;
const dbName = process.env.DM_BOOKS_DB_NAME;

// let client = new MongoClient(url, {
// I could not figure out why the above code doesn't work so I had to explicity write the code as below:
let client = new MongoClient('mongodb://admin:password@mongodb:27017', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,  
});

// Sets up connection to the databe using MongoClient
export async function makeDb () {
  if (!client.isConnected) {
    await client.connect();
  }
  // return client.db(process.env.DM_BOOKS_DB_NAME);
  // Again, I could not figure out why the above code doesn't work so I had to explicity write the code as below:
  return client.db('dm_books_api');
};

const booksDb = makeBooksDb({ makeDb });
export default booksDb;