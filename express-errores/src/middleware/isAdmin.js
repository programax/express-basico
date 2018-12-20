const AuthError = require('../errors/authError');

module.exports = (req, res, next) => {
    if (req.headers['authorization'] !== '123') {
        next(new AuthError());
    } else {
        next();
    }
};
