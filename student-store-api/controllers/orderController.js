// import orderModel
const orderModel = require("../models/orderModel");

// Function gets all the orders
const getAllOrders = async (req, res) => {
  const { category, name, price } = req.query;
  let filter = {}; //filter object
  let orderBy = {}; //orderBy - asc/desc

  if (category) {
    filter.category = category;
  }
  if (name) {
    //set the orderBy according to asc/desc
    orderBy = { name: name === "asc" ? "asc" : "desc" };
  }

  if (price) {
    //set the orderBy according to asc/desc
    orderBy = { price: price === "asc" ? "asc" : "desc" };
  }

  try {
    const orders = await orderModel.getAllOrders(filter, orderBy);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.getOrderById(req.params.id);
    if (order) {
      res.status(200).json(order);
    } 
    else {
      res.status(404).json({ error: "Order not found" });
    }
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to create a new order
const createOrder = async (req, res) => {
  try {
    const newOrder = await orderModel.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to update a order
const udpateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderModel.updateOrder(req.params.id, req.body);
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to delete a order
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderModel.deleteOrder(req.params.id);
    if (deletedOrder) {
      res.status(200).json(deletedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addItemToOrder = async (req, res) => {
  try {
    const orderItem = await orderModel.addItemToOrder(req.params.order_id, req.body)

    res.json(orderItem);
  } catch (error) {
    console.error("Error adding item to order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteItemFromOrder = async (req, res) => {
  try {
    const orderItem = await orderModel.deleteItemFromOrder(req.params.order_id, req.params.order_item_id);

    res.json(orderItem);
  } catch (error) {
    console.error("Error deleting item from order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOrderTotalPrice = async (req, res) => {
  try {
    const orderTotal = await orderModel.getOrderTotalPrice(req.params.order_id);
    res.json(orderTotal);
  }
  catch (error){
    console.error("Error getting total price from order", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//export the functions
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  udpateOrder,
  deleteOrder,
  addItemToOrder,
  deleteItemFromOrder,
  getOrderTotalPrice,
};