const express = require('express');
const {
    addNumber,
    getNumbers,
    deleteNumber,
    updateNumber
} = require('../controllers/phoneNumberController');

const router = express.Router();

router.post('/addNumber', addNumber);
router.get('/getNumbers', getNumbers);
router.delete('/deleteNumber/:id', deleteNumber);
router.put('/updateNumber/:id', updateNumber);

module.exports = router;
