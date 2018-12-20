const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'create',
    });
});

router.get('/', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'read all',
    });
});

router.put('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'update',
    });
});

router.get('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'read one',
    });
});

router.delete('/:id', (req, res) => {
    res.json({
        status: 'ok',
        crud: 'delete',
    });
});

module.exports = router;
