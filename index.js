import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import notFound404 from "./src/middlewares/notFound.js";

const app = express();

app.use(express.static('public/'));

app.get('/', (req, res) =>  {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/cursos', (req, res) =>  {
    res.sendFile(process.cwd() + '/public/pages/cursos.html');
});

// MIDDLEWARES

app.use(notFound404);

// PORT

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});