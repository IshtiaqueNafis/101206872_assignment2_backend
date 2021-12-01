const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json();
});

router.post('/', (req, res) => {
    res.status(200).json();
});

router.put('/:id', (req, res) => {
    res.status(200).json();
});

router.delete('/:id', (req, res) => {
    res.status(200).json();
});
module.exports = router;
