const PhoneNumber = require("../models/PhoneNumber");

exports.addNumber = async (req, res) => {
  const { number, name } = req.body;
  const newPhoneNumber = new PhoneNumber({ number, name });

  try {
    const savedPhoneNumber = await newPhoneNumber.save();
    res.json({
      message: "Phone number added successfully",
      data: savedPhoneNumber,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding phone number", error: error.message });
  }
};

exports.getNumbers = async (req, res) => {
  try {
    const numbers = await PhoneNumber.find({});
    res.json(numbers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching phone numbers", error: error.message });
  }
};

exports.deleteNumber = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNumber = await PhoneNumber.findByIdAndDelete(id);
    if (!deletedNumber) {
      return res.status(404).json({ message: "Phone number not found" });
    }
    res.json({ message: "Phone number deleted successfully", data: deletedNumber });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting phone number", error: error.message });
  }
};

exports.updateNumber = async (req, res) => {
  const { id } = req.params;
  const { number, name } = req.body;

  try {
    const updatedNumber = await PhoneNumber.findByIdAndUpdate(
      id,
      { number, name },
      { new: true }
    );
    if (!updatedNumber) {
      return res.status(404).json({ message: "Phone number not found" });
    }
    res.json({
      message: "Phone number updated successfully",
      data: updatedNumber,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating phone number", error: error.message });
  }
};
