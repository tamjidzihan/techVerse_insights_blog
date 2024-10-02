const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

// Route to get all users (only accessible by admin)
router.get('/users', auth, getAllUsers);

module.exports = router;
