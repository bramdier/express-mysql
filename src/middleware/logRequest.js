const logRequest = (req, res, next) => {
    console.log('Telah terjadi request di PATH: ', req.path);
    next();
}

module.exports = logRequest;