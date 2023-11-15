const express = require("express");
const router = express.Router();

const createOrderController = require("../controllers/paymentsController.js");
router.get("/", createOrderController.createOrder)

// router.get("(/success)", (req, res) => {
//     res.send("create success")
// });

// router.get("(/webHook)", (req, res) => {
//     res.send("create webHood")
// });

module.exports = router;