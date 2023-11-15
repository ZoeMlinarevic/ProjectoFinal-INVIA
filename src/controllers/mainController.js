const index = (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
};

module.exports = {
    index: index
}