function routeHelper(callback) {
    return async (req, res) => {
        try {
            await callback(req, res);
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addUserToDB() {
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error('hubo un problema')), 500));
}

module.exports = {
    routeHelper,
    sleep,
    addUserToDB,
};
