import mongoose from 'mongoose';

import data from '../../mockData/data';

const userSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  lastModifiedDate: Date,
});

const User = mongoose.model('User', userSchema);


User.findOne({}, (err, user) => {
  if (!user) {
    User.insertMany(data.users);
  }
});

export default User;
