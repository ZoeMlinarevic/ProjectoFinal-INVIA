import express from "express";
import newsletterController from "../controllers/newsletterController.js";

const router = express.Router();

router.post("/enviado", newsletterController.newsletterPost);
router.post("/enviar", newsletterController.enviar);

export default router;