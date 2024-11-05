const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/video', videoRoutes);

module.exports = app;
