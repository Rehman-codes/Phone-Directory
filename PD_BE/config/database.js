const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/PD', {});
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

module.exports = connectDB;
