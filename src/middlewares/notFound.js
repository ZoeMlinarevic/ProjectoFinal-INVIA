const notFound404 = (req, res, next) => {
    res.status(404).send("NO HAY ESE ELEMENTO");
}

export default notFound404;