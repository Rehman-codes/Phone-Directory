const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
    number: { type: String, required: true }
});

module.exports = mongoose.model('PhoneNumber', phoneNumberSchema);
