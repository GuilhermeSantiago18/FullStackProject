const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydatabase';

const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();
