import enviarNewsletter from "../models/newsletterModel.js";
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';


const newsletterPost = async (req, res) => {
    console.log(await enviarNewsletter(req.body.newsletter));
    
    const newsletterReturnTo = req.body.newsletterReturnTo || `/`;
    res.redirect(newsletterReturnTo);
};

async function enviar()  {
    const transport = await nodemailer.createTransport ({
        service: 'outlook',
        auth: {
            user: "gorillazxd@hotmail.es",
            pass: "@amoamispapas123A",
        }
    });
    
    const currentDirectory = process.cwd();

    const parameters = {
        from: "gorillazxd@hotmail.es",
        to: "andresclavijo0822@gmail.com",
        subject: "Correo de prueba",
        text: "Hola, este es un correo de prueba",
        html: fs.readFileSync(path.join(currentDirectory, 'public/pages/newsletter.html'), 'utf8')
    };
    
    transport.sendMail(parameters, (error, info) => {
        try {
            console.log(info, 'Correo enviado');
        } catch (error) {
            console.log(error);
        }
    });
}

export default { newsletterPost, enviar };
