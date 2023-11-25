import { conn } from "../config/conm.js";

const enviarNewsletter = async (email) => {
    try {
        const [rows] = await conn.query("INSERT INTO `Newsletter` (`id`, `email`) VALUES (NULL, ?)", [email]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

export default enviarNewsletter;
