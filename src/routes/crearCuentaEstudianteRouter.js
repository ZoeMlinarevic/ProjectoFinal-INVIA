import express from "express";
import crearCuentaEstudianteController from "../controllers/crearCuentaEstudianteController.js";

const router = express.Router();

router.get("/", crearCuentaEstudianteController.crearCuentaEstudiante);

export default router;