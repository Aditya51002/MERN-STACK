const productService = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    const { product_name, product_price, product_category, product_stock } = req.body;

    // Validate required fields
    if (!product_name || !product_price || !product_category || !product_stock) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const productData = {
      product_name,
      product_price,
      product_category,
      product_stock,
    };

    const product = await productService.createProduct(productData);
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createProduct,
};