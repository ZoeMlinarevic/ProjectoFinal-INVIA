const cursos = async (req, res) => {
    console.log(await getProductos());
    res.sendFile(process.cwd() + '/public/pages/cursos.html');
};

module.exports = {
    cursos: cursos
}