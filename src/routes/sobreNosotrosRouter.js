import express from "express";
import sobreNosotrosController from "../controllers/sobreNosotrosController.js";

const router = express.Router();

router.get("/", sobreNosotrosController.sobreNosotros);

export default router;