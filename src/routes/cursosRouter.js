import express from "express";
import cursosController from "../controllers/cursosController.js";

const router = express.Router();

router.get("/", cursosController.cursos)

export default router;