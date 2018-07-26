import mongoose from 'mongoose';

import data from '../../mockData/data';

const productSchema = mongoose.Schema({
  title: String,
  color: String,
  lastModifiedDate: Date,
});

const Product = mongoose.model('Product', productSchema);

Product.findOne({}, (err, product) => {
  if (!product) {
    Product.insertMany(data.products);
  }
});

export default Product;
