import mongoose from 'mongoose';

const startMongoose = () => {
 
  mongoose.connect('mongodb://localhost/nodejs_mp');

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Mongoose is started work');
  });
};

export default startMongoose;