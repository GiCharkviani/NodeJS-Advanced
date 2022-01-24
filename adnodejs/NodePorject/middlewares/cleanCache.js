const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    await next(); // this trick will help me to run this middleware after it's handler is executed

    clearHash(req.user.id);
}