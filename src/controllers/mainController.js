const index = async (req, res) => {
    console.log(await getProductos());
    res.sendFile(process.cwd() + '/public/index.html');
};

module.exports = {
    index: index
}