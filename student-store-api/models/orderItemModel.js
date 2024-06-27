const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Function gets all the cars
const getAllOrderItems = async () => {
    return prisma.orderItem.findMany();
  };
  
  // function to get car by ID
  const getOrderItemById = async (id) => {
    return prisma.orderItem.findUnique({ where: { id: parseInt(id) } });
  };
  
  //Function to create a new car
  const createOrderItem = async (orderItemData) => {
    return prisma.orderItem.create({ data: {
      order_id: parseInt(orderItemData.order_id),
      product_id: parseInt(orderItemData.product_id),
      quantity: parseInt(orderItemData.quantity),
      price: parseFloat(orderItemData.price),
    } });
  };
  
  //Function to update a car
  const updateOrderItem = async (id, orderItemData) => {
    return prisma.orderItem.update({
      where: { id: parseInt(id) },
      data: orderItemData,
    });
  };
  
  //Function to delete a car
  const deleteOrderItem = async (id) => {
    return prisma.orderItem.delete({ where: { id: parseInt(id) } });
  };
  
  //export the functions
  module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
  };