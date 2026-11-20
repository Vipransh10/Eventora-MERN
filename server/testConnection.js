const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eventora';

console.log('⏳ Connecting to MongoDB...');

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('\n✅ MongoDB Connected Successfully!');
    console.log('-----------------------------------');
    console.log('Host:', mongoose.connection.host);
    console.log('Database Name:', mongoose.connection.name);
    console.log('-----------------------------------\n');
    process.exit(0);
  })
  .catch((err) => {
    console.error('\n❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });
