import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cursos = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursos.html');
    res.sendFile(filePath);
};

const html = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoHtml.html');
    res.sendFile(filePath);
};

const css = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoCss.html');
    res.sendFile(filePath);
};

const javascript = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoJS.html');
    res.sendFile(filePath);
};

const node = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoNode.html');
    res.sendFile(filePath);
};

const sql = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoSql.html');
    res.sendFile(filePath);
};

const python = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoPython.html');
    res.sendFile(filePath);
};

const logicaDeProgramacion = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoLogica.html');
    res.sendFile(filePath);
};

const c = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoC.html');
    res.sendFile(filePath);
};

const ingles = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursoPaginas/cursoIngles.html');
    res.sendFile(filePath);
};

export default { 
    cursos, html,
    css, javascript,
    node, sql,
    python, logicaDeProgramacion,
    c, ingles
};