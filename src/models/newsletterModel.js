import { conn } from "../config/conm.js";

const enviarNewsletter = async (email) => {
    try {
        const [existingRows] = await conn.query("SELECT * FROM `Newsletter` WHERE `email` = ?", [email]);

        if (existingRows.length === 0) {
            const [insertRows] = await conn.query("INSERT INTO `Newsletter` (`id`, `email`, `fecha`) VALUES (NULL, ?, NOW())", [email]);
            return insertRows;
        } else {
            return { error: "El email ya está registrado." };
        }
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

export default enviarNewsletter;

