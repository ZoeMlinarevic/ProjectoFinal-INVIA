import { conn, trans } from "../config/conm.js";
import path from 'path';
import fs from 'fs/promises'; 

const enviarNewsletter = async (email) => {
    let connection;
    try {
        connection = await conn.getConnection();

        const [existingRows] = await connection.query("SELECT * FROM `Newsletter` WHERE `email` = ?", [email]);

        if (existingRows.length === 0) {
            const [insertRows] = await connection.query("INSERT INTO `Newsletter` (`id`, `email`, `fecha`) VALUES (NULL, ?, NOW())", [email]);

            const currentDirectory = process.cwd();
            const htmlFilePath = path.join(currentDirectory, 'public/pages/newsletter.html');

            try {
                await fs.access(htmlFilePath);
                const htmlContent = await fs.readFile(htmlFilePath, 'utf8');

                const parameters = {
                    from: "❤INVIA invia.educacion@gmail.com",
                    to: [email],
                    subject: "Bienvenid@ a INVIA",
                    html: htmlContent,
                };

                const info = await trans.sendMail(parameters);
                console.log(info, 'Correo enviado');

                return insertRows;
            } catch (error) {
                console.error(`Error al leer o enviar el correo electrónico: ${error.message}`);
                return { error: "Error al enviar el correo electrónico." };
            }
        } else {
            return { error: "El email ya está registrado." };
        }
    } catch (error) {
        console.error(`Error en la base de datos: ${error.message}`);
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

export default enviarNewsletter;
