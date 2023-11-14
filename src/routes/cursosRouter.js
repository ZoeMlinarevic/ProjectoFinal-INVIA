const express = require("express");
const router = express.Router();

const cursosController = require("../controllers/cursosController.js");

router.get("/cursos", cursosController.cursos)

module.exports = router;