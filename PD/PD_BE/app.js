const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/PD';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log(err));

// Define a schema and model for the phone number
const phoneNumberSchema = new mongoose.Schema({
    number: { type: String, required: true }
});

const PhoneNumber = mongoose.model('PhoneNumber', phoneNumberSchema);

app.post('/addNumber', async (req, res) => {
    const { number } = req.body;
    console.log("Received number:", number);

    const newPhoneNumber = new PhoneNumber({ number });

    try {
        const savedPhoneNumber = await newPhoneNumber.save();
        res.json({ message: 'Received number successfully', data: savedPhoneNumber });
    } catch (error) {
        res.status(500).json({ message: 'Error saving number', error: error.message });
    }
});


app.get('/getNumbers', async (req, res) => {
    try {
        const numbers = await PhoneNumber.find({});
        res.json(numbers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching numbers', error: error.message });
    }
});


app.delete('/deleteNumber/:id', async (req, res) => {
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
});


app.put('/updateNumber/:id', async (req, res) => {
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
});
