const express = require('express');
const validations = require('./validations');

const app = express();

app.use(express.json());

app.post('/users', validations.validate(validations.createUsersValidation), (req, res) => {
    const { name, age, email } = req.body;

    res.json({
        status: 'ok',
    });
});

app.put('/users/:id', (req, res) => {
    const { name, age, email } = req.body;

    if (typeof name === 'string' && name.length >= 5 && /^[a-z]+$/i.test(name)) {

    }

    res.json({
        status: 'ok',
    });
});

app.use((error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

app.listen(5000, () => console.log('API ready port: 5000...'));
