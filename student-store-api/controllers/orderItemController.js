// import orderItemModel
const orderItemModel = require("../models/orderItemModel");

// Function gets all the orderItems
const getAllOrderItems = async (req, res) => {
  const { category, name, price } = req.query;
  let filter = {}; //filter object
  let orderItemBy = {}; //orderItemBy - asc/desc

  if (category) {
    filter.category = category;
  }
  if (name) {
    //set the orderItemBy according to asc/desc
    orderItemBy = { name: name === "asc" ? "asc" : "desc" };
  }

  if (price) {
    //set the orderItemBy according to asc/desc
    orderItemBy = { price: price === "asc" ? "asc" : "desc" };
  }

  try {
    const orderItems = await orderItemModel.getAllOrderItems(filter, orderItemBy);
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to get orderItem by ID
const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await orderItemModel.getOrderItemById(req.params.id);
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: "OrderItem not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to create a new orderItem
const createOrderItem = async (req, res) => {
  try {
    const newOrderItem = await orderItemModel.createOrderItem(req.body);
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to update a orderItem
const udpateOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await orderItemModel.updateOrderItem(req.params.id, req.body);
    if (updatedOrderItem) {
      res.status(200).json(updatedOrderItem);
    } else {
      res.status(404).json({ error: "OrderItem not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to delete a orderItem
const deleteOrderItem = async (req, res) => {
  try {
    const deletedOrderItem = await orderItemModel.deleteOrderItem(req.params.id);
    if (deletedOrderItem) {
      res.status(200).json(deletedOrderItem);
    } else {
      res.status(404).json({ error: "OrderItem not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//export the functions
module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  udpateOrderItem,
  deleteOrderItem,
};