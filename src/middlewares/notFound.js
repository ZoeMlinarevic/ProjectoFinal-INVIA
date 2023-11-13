const notFound404 = (req, res, next) => {
    res.status(404).send("NO HAY ESE ELEMENTO, Error 404");
}

export default notFound404;