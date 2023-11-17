import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mainRouter from "./src/routes/mainRouter.js";
import cursosRouter from "./src/routes/cursosRouter.js";
import crearCuentaEstudianteRouter from "./src/routes/crearCuentaEstudianteRouter.js";

// MERCADO PAGO
// import createOrderRouter from "./src/routes/payments/mercadoPago/createOrderRouter.js";
// import successRouter from "./src/routes/payments/mercadoPago/successRouter.js";
// import webhookRouter from "./src/routes/payments/mercadoPago/webhookRouter.js";

// MIDDLEWARE
import notFoundMiddleware from "./src/middlewares/notFound.js";

const app = express();

app.use(morgan("dev"));
app.use(express.static('public'));

// RUTAS
app.use("/", mainRouter);
app.use("/cursos", cursosRouter);
app.use("/crear-cuenta-estudiante", crearCuentaEstudianteRouter);

// RUTAS DE PAYMENTS
// MERCADO PAGO
// app.use("/createOrder", createOrderRouter);
// app.use("/success", successRouter);
// app.use("/webhook", webhookRouter);

// MIDDLEWARE de NOTFOUND
app.use(notFoundMiddleware);

// Configurar puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});
