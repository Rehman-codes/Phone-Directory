const phoneNumberController = require('../controllers/phoneNumberController');
const express = require("express");
const router = express.Router();

const { addNumber, getNumbers, deleteNumber, updateNumber } =
  phoneNumberController;

router.post("/addNumber", addNumber);
router.get("/getNumbers", getNumbers);
router.delete("/deleteNumber/:id", deleteNumber);
router.put("/updateNumber/:id", updateNumber);

module.exports = router;
