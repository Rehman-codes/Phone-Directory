const express = require('express');      // Import Express, a web framework for building server-side applications.
const mongoose = require('mongoose');    // Import Mongoose, an ODM library for MongoDB to interact with the database.
const morgan = require('morgan');        // Import Morgan, an HTTP request logger middleware.
const helmet = require('helmet');        // Import Helmet, a middleware to help secure Express apps by setting various HTTP headers.
const cors = require('cors');            // Import CORS, a middleware to enable Cross-Origin Resource Sharing.
const dotenv = require('dotenv');        // Import Dotenv, a module that loads environment variables from a '.env' file into 'process.env'.

dotenv.config();           // Initialize Dotenv to load environment variables from the '.env' file.
const app = express();     // Create an instance of an Express application.

// Middleware (Functions that process requests before they reach the route handler)
app.use(helmet());          // Use Helmet to secure the app by setting various HTTP headers.
app.use(cors());            // Use CORS to enable cross-origin requests.
app.use(morgan('common'));  // Use Morgan to log HTTP requests in the 'common' format.
app.use(express.json());    // Use built-in middleware to parse incoming JSON payloads.

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  // Connect to MongoDB using the connection string from environment variables.
  .then(() => console.log('MongoDB connected'))  // Log a success message if the connection is established.
  .catch(err => console.error(err));  // Log an error message if the connection fails.

// Routes
const userRoutes = require('./routes/userRoutes');  // Import user routes.
app.use('/api/users', userRoutes);  // Use the user routes for endpoints starting with '/api/users'.

// Error handling middleware
const errorHandler = require('./middlewares/errorHandler');  // Import custom error handling middleware.
app.use(errorHandler);  // Use the error handling middleware to catch and handle errors.

// Start the server
const PORT = process.env.PORT || 5000;  // Get the port from environment variables or use 5000 as a default.
app.listen(PORT, () => {  // Start the server and listen on the specified port.
  console.log(`Server is running on port ${PORT}`);  // Log a message indicating the server is running.
});
