const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const phoneNumberRoutes = require('./routes/phoneNumberRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use Routes
app.use('/api', phoneNumberRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
