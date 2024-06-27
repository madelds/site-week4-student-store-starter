const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Function gets all the cars
const getAllProducts = async (filter = {}, orderBy = {}) => {
    return prisma.product.findMany({
      where: filter,
      orderBy: orderBy,
    });
  };
  
  // function to get car by ID
  const getProductById = async (id) => {
    return prisma.product.findUnique({ where: { id: parseInt(id) } });
  };
  
  //Function to create a new car
  const createProduct = async (productData) => {
    return prisma.product.create({ data: {
      name: productData.name,
      category: productData.category,
      image_url: productData.image_url,
      description: productData.description,
      price: parseFloat(productData.price)
    } });
  };
  
  //Function to update a car
  const updateProduct = async (id, productData) => {
    return prisma.product.update({
      where: { id: parseInt(id) },
      data: productData,
    });
  };
  
  //Function to delete a car
  const deleteProduct = async (id) => {
    return prisma.product.delete({ where: { id: parseInt(id) } });
  };
  
  //export the functions
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };