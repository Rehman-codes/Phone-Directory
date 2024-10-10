const phoneNumberController = require('../controllers/phoneNumberController');
const express = require("express");
const router = express.Router();

const { addNumber, getNumbers, deleteNumber, updateNumber } =
  phoneNumberController;

router.post("/numbers", addNumber);          
router.get("/numbers", getNumbers);         
router.delete("/numbers/:id", deleteNumber);
router.put("/numbers/:id", updateNumber);   

module.exports = router;
