const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(express.json());

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to KYLE WASnt HEREFitConnect API!');
});

// Use your other routes (e.g., auth routes)
app.use('/api/auth', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});