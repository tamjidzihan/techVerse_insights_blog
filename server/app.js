const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blog'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
