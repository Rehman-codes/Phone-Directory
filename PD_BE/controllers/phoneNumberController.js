const PhoneNumber = require('../models/PhoneNumber');

exports.addNumber = async (req, res) => {
    const { number } = req.body;
    const newPhoneNumber = new PhoneNumber({ number });

    try {
        const savedPhoneNumber = await newPhoneNumber.save();
        res.json({ message: 'Received number successfully', data: savedPhoneNumber });
    } catch (error) {
        res.status(500).json({ message: 'Error saving number', error: error.message });
    }
};

exports.getNumbers = async (req, res) => {
    try {
        const numbers = await PhoneNumber.find({});
        res.json(numbers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching numbers', error: error.message });
    }
};

exports.deleteNumber = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNumber = await PhoneNumber.findByIdAndDelete(id);
        if (!deletedNumber) {
            return res.status(404).json({ message: 'Number not found' });
        }
        res.json({ message: 'Number deleted successfully', data: deletedNumber });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting number', error: error.message });
    }
};

exports.updateNumber = async (req, res) => {
    const { id } = req.params;
    const { number } = req.body;

    try {
        const updatedNumber = await PhoneNumber.findByIdAndUpdate(id, { number }, { new: true });
        if (!updatedNumber) {
            return res.status(404).json({ message: 'Number not found' });
        }
        res.json(updatedNumber);
    } catch (error) {
        res.status(500).json({ message: 'Error updating number', error: error.message });
    }
};
