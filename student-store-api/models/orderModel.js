const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Function gets all the cars
const getAllOrders = async (filter = {}, orderBy = {}) => {
    return prisma.order.findMany({
      where: filter,
      orderBy: orderBy,
      include: {
        order_items: true
      }
    });
  };
  
  // function to get car by ID
  const getOrderById = async (id) => {
    return prisma.order.findUnique({ where: { order_id: parseInt(id) }, include: {
      order_items: true
    } });
  };
  
  //Function to create a new car
  const createOrder = async (orderData) => {
    return prisma.order.create({ data: {
      customer_id: parseInt(orderData.customer_id),
      status: orderData.status,
    } });
  };
  
  //Function to update a car
  const updateOrder = async (id, orderData) => {
    return prisma.order.update({
      where: { order_id: parseInt(id) },
      data: orderData,
    });
  };
  
  //Function to delete a car
  const deleteOrder = async (id) => {
    return prisma.order.delete({ where: { order_id: parseInt(id) } });
  };

  const addItemToOrder = async (orderId, orderItemData) => {
    const product = await prisma.product.findUnique({where: {id: parseInt(orderItemData.product_id)}});
    const order = await prisma.order.findUnique({where: {order_id: parseInt(orderId)}})
    await prisma.order.update({
      where: {order_id: parseInt(orderId)},
      data: {
        total_price: parseFloat(order.total_price) + parseFloat(product.price) * parseInt(orderItemData.quantity)
      }
    })
    return prisma.orderItem.create({
      data: {
        order_id: parseInt(orderId),
        product_id: parseInt(orderItemData.product_id),
        quantity: parseInt(orderItemData.quantity),
        price: parseFloat(product.price) * parseInt(orderItemData.quantity),
      }
    });
  }

  const deleteItemFromOrder = async (orderId, orderItemId) => {
    const orderItem = await prisma.orderItem.findUnique({where: {order_item_id: parseInt(orderItemId)}});
    const order = await prisma.order.findUnique({where: {order_id: parseInt(orderId)}})
    await prisma.order.update({
      where: {order_id: parseInt(orderId)},
      data: {
        total_price: parseFloat(order.total_price) - parseFloat(orderItem.price)
      }
    })
    return prisma.orderItem.delete({
      where: {
        order_item_id: parseInt(orderItemId)
      },
    });
  }

  const getOrderTotalPrice = async (orderId) => {
    const order = await prisma.order.findUnique({where: {order_id: parseInt(orderId)}});
    return{total_price: order.total_price}
  }
  
  //export the functions
  module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    addItemToOrder,
    deleteItemFromOrder,
    getOrderTotalPrice,
  };