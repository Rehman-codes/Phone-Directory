const express = require('express');
const router = express.Router();
const phoneNumberController = require('../controllers/phoneNumberController');

router.post('/addNumber', phoneNumberController.addNumber);
router.get('/getNumbers', phoneNumberController.getNumbers);
router.delete('/deleteNumber/:id', phoneNumberController.deleteNumber);
router.put('/updateNumber/:id', phoneNumberController.updateNumber);

module.exports = router;
