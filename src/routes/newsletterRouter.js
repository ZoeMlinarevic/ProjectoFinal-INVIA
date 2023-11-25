import express from "express";
import newsletterController from "../controllers/newsletterController.js";

const router = express.Router();

router.post("/enviado", newsletterController.newsletterPost);

export default router;