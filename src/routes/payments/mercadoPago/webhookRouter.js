const express = require("express");
const router = express.Router();

const webhookController = require("../../../controllers/payments/mercadoPago/webhookController.js");
router.get("/", webhookController.webhook)

module.exports = router;