const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// get all the cars
router.get("/", orderController.getAllOrders);
//get car by ID
router.get("/:id", orderController.getOrderById);
//add a new car
router.post("/", orderController.createOrder);
router.post("/:order_id/items", orderController.addItemToOrder);
//create a new car
router.put("/:id", orderController.udpateOrder);
//delete a car
router.delete("/:id", orderController.deleteOrder);
router.delete("/:order_id/items/:order_item_id", orderController.deleteItemFromOrder);
router.get("/:order_id/total", orderController.getOrderTotalPrice);

module.exports = router;