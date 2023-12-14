import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import path from "path";

// RUTAS

import mainRouter from "./src/routes/mainRouter.js";
import cursosRouter from "./src/routes/cursosRouter.js";
import crearCuentaEstudianteRouter from "./src/routes/crearCuentaEstudianteRouter.js";
import newsletter from "./src/routes/newsletterRouter.js";
import sobreNosotros from "./src/routes/sobreNosotrosRouter.js";

// MERCADO PAGO
// import createOrderRouter from "./src/routes/payments/mercadoPago/createOrderRouter.js";
// import successRouter from "./src/routes/payments/mercadoPago/successRouter.js";
// import webhookRouter from "./src/routes/payments/mercadoPago/webhookRouter.js";

// MIDDLEWARE
import notFoundMiddleware from "./src/middlewares/notFound.js";

const app = express();

app.use(morgan("dev"));

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath && "public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// RUTAS
app.use("./", mainRouter);
app.use("/Cursos", cursosRouter);
app.use("/Crear-Cuenta-Estudiante", crearCuentaEstudianteRouter);
app.use("/Sobre-Nosotros", sobreNosotros);

// RUTAS DE NEWSLETTER

app.use("/newsletter", newsletter);

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
