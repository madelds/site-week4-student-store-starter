// import productModel
const productModel = require("../models/productModel");

// Function gets all the products
const getAllProducts = async (req, res) => {
  let { category, sort, order } = req.query;
  let filter = {}; //filter object
  let orderBy = {}; //orderBy - asc/desc

  if (category) {
    filter.category = category;
  }

  if (!order) {
    order = 'desc';
  }

  if (sort === 'name') {
    orderBy = { name: order };
  }

  if (sort === 'price') {
    orderBy = { price: order };
  }

  try {
    const products = await productModel.getAllProducts(filter, orderBy);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = await productModel.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to update a product
const udpateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//export the functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  udpateProduct,
  deleteProduct,
};