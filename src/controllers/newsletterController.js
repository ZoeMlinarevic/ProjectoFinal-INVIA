import enviarNewsletter from "../models/newsletterModel.js";

const newsletterPost = async (req, res) => {
    console.log(await enviarNewsletter(req.body.newsletter));
    res.send(`envio Creado ${req.body.newsletter}`);
};

export default { newsletterPost };
