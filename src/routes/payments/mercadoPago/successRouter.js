const express = require("express");
const router = express.Router();

const successController = require("../../../controllers/payments/mercadoPago/successController.js");
router.get("/", successController.success)

module.exports = router;