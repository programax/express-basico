const express = require('express');
const validations = require('./middleware/validations');
const errorMiddleware = require('./middleware/errors');
const isAdminMiddleware = require('./middleware/isAdmin');

process.on('unhandledRejection', (error) => {
    console.log(error);
});

process.on('uncaughtException', (error) => {
    console.log(error);
});

const app = express();

app.use(express.json());

app.post('/users', isAdminMiddleware, validations.validate(validations.createUsersValidation), (req, res, next) => {
    res.json({
        status: 'ok',
    });
});

app.post('/users-async', isAdminMiddleware, validations.validate(validations.createUsersValidation), async (req, res, next) => {
    throw new Error('async error');

    res.json({
        status: 'ok',
    });
});

app.use(errorMiddleware);

app.listen(5000, () => console.log('API ready port: 5000...'));
