import express from "express";
import cursosController from "../controllers/cursosController.js";

const router = express.Router();

router.get("/", cursosController.cursos)

router.get("/HTML", cursosController.html)
router.get("/CSS", cursosController.css)
router.get("/JavaScript", cursosController.javascript)
router.get("/Node-Js", cursosController.node)
router.get("/SQL", cursosController.sql)
router.get("/PYTHON", cursosController.python)
router.get("/Logica-Programacion", cursosController.logicaDeProgramacion)
router.get("/C", cursosController.c)
router.get("/Ingles", cursosController.ingles)

export default router;