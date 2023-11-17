const index = (req, res) => {
    res.sendFile(new URL('../public/index.html', import.meta.url).pathname);
};

export default { index };
