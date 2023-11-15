const express = require("express");
const router = express.Router();

const crearCuentaEstudianteController = require("../controllers/crearCuentaEstudianteController.js");

router.get("/", crearCuentaEstudianteController.crearCuentaEstudiante);

module.exports = router;