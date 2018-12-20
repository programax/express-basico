const express = require('express');
const usersRouter = require('./routers/users');
const ordersRouter = require('./routers/orders');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.listen(5000, () => console.log('API ready port: 5000...'));
