import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: String,
  capital: {
    type: Boolean,
    required: true,
  },
  location: {
    lat: Number,
    long: Number,
  },
  lastModifiedDate: Date,
});

const City = mongoose.model('City', citySchema);

export default City;
