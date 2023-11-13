import express from 'express';


const app = express();

app.use(express.static('public/'));

app.get('/', (req, res) =>  {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/cursos', (req, res) =>  {
    res.sendFile(process.cwd() + '/public/pages/curso.html');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
});