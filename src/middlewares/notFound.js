import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const notFound404 = (req, res, next) => {
    const filePath = path.join(__dirname, "/../../public/pages/404.html");
    res.status(404).sendFile(filePath);
}

export default notFound404;