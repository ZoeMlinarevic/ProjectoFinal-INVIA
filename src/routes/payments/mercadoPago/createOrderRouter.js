const express = require("express");
const router = express.Router();

const createOrderController = require("../../../controllers/payments/mercadoPago/createOrderController.js");
router.get("/", createOrderController.createOrder)

module.exports = router;