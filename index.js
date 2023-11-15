require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static('public'));

// ROUTES

const mainRouter = require("./src/routes/mainRouter.js");
app.use("/", mainRouter);

const cursosRouter = require("./src/routes/cursosRouter.js");
app.use("/cursos", cursosRouter);

const crearCuentaEstudianteRouter = require("./src/routes/crearCuentaEstudianteRouter.js");
app.use("/crear-cuenta-estudiante", crearCuentaEstudianteRouter);

// EXTERNAL ROUTES
// ROUTES MERCADO PAGO

const createOrderRouter = require("./src/routes/payments/mercadoPago/createOrderRouter.js");
app.use("/createOrder", createOrderRouter);

const successRouter = require("./src/routes/payments/mercadoPago/successRouter.js"); // no esta listo 
app.use("/success", successRouter);

const webhookRouter = require("./src/routes/payments/mercadoPago/webhookRouter.js"); // no esta listo
app.use("/webhook", webhookRouter);

// ROUTES BINANCE

// MIDDLEWARES

app.use(require("./src/middlewares/notFound.js"));

// PORT

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});