import enviarNewsletter from "../models/newsletterModel.js";

const newsletterPost = async (req, res) => {
    console.log(await enviarNewsletter(req.body.newsletter));
    
    const newsletterReturnTo = req.body.newsletterReturnTo || `/`;
    res.redirect(newsletterReturnTo);
};

export default { newsletterPost };
