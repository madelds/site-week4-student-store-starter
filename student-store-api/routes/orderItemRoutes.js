const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

// get all the cars
router.get("/", orderItemController.getAllOrderItems);
//get car by ID
router.get("/:id", orderItemController.getOrderItemById);
//add a new car
router.post("/", orderItemController.createOrderItem);
//create a new car
router.put("/:id", orderItemController.udpateOrderItem);
//delete a car
router.delete("/:id", orderItemController.deleteOrderItem);

module.exports = router;