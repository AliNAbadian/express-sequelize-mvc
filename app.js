// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('./models'); // Import models to initialize database

const app = express();

app.use(express.json()); // Middleware for parsing JSON
app.use('/api', userRoutes); // Mount user routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
