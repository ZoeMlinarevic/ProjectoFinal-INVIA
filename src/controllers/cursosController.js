const cursos = (req, res) => {
    res.sendFile(process.cwd() + '/public/pages/cursos.html');
};

module.exports = {
    cursos: cursos
}