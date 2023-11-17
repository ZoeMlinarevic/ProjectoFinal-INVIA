import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cursos = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/pages/cursos.html');
    res.sendFile(filePath);
};

export default { cursos };