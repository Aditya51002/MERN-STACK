const Product = require('../models/product');

const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

module.exports = {
  createProduct,
};