const middleware = (error, req, res, next) => {
    let errorObject;

    if (typeof error.toJson === 'function') {
        errorObject = error.toJson();
    } else {
        errorObject = {
            status: 500,
            name: 'UnkwnownError',
            message: 'Unkwnown Error',
        };
    }

    // ...

    res.status(errorObject.status).json(errorObject);
};

module.exports = middleware;
