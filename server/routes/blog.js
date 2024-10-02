const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, getBlogById, deleteBlog, updateBlog } = require('../controllers/blogController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');


// Create Blog (Only Admins and Creators)
router.post('/', auth, role([1, 2]), createBlog);

// Get All Blogs
router.get('/', getBlogs);

// Route for getting a blog by ID
router.get('/:id', getBlogById);

// Delete a blog by ID (protected)
router.delete('/:id', auth, deleteBlog);

// Update a blog by ID (protected)
router.put('/:id', auth, updateBlog);



module.exports = router;
