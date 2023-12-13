import { Router } from "express";
import { createOrder } from "../../../controllers/payments/mercadoPago/createOrderController.js";

const router = Router();

router.get("/", createOrder)

export default router;