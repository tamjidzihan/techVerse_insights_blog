const express = require('express');
const router = express.Router();
const { createBlog, getBlogs } = require('../controllers/blogController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

// Get All Blogs
router.get('/', getBlogs);

// Create Blog (Only Admins and Creators)
router.post('/', auth, role([1, 2]), createBlog);

module.exports = router;
