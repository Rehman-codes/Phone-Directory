const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

const phoneNumberRoutes = require('./routes/phoneNumberRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use('/', phoneNumberRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
