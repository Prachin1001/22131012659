const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./route/urlRoute');
const connectDB = require('./db/db');

const app = express();
app.use(express.json());

// Routes
app.use('/', urlRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 