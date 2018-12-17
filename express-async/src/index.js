const express = require('express');
const {
    routeHelper,
} = require('./route');

const app = express();

async function getUser() {
    return {
        id: 123,
        name: 'leo',
    };
}

app.use((req, res, next) => {
    if (req.ip === '182.15.25.48') {
        next(new Error('error!!!'));
    } else {
        next();
    }
});

const middleware = async (req, res, next) => {
    const user = await getUser();

    req.locals = {
        user,
    };

    next();
};

app.get('/test', middleware, async (req, res) => {
    const user = req.locals.user;

    res.json({
        status: 'ok',
        user,
    });
});

app.get('/test-2', routeHelper(async (req, res) => {
    const user = req.locals.user;

    res.json({
        status: 'ok',
        user,
    });
}));

app.listen(5000, () => console.log('API ready port: 5000...'));
