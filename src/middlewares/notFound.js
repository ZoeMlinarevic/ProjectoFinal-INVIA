const path = require("path");

const notFound404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + "/../../public/pages/404.html"));}

module.exports = notFound404;