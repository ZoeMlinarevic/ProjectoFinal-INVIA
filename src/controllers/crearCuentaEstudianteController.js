const crearCuentaEstudiante = (req, res) => {
    res.sendFile(process.cwd() + '/public/pages/login.html');
};

module.exports = {
    crearCuentaEstudiante: crearCuentaEstudiante
}