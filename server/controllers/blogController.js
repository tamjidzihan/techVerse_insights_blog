const Blog = require('../models/Blog');

// Create blog
exports.createBlog = async (req, res) => {
    try {
        const { title, category, image, content } = req.body;

        // Content should be an array of { headline, paragraph }
        const blog = new Blog({
            title,
            category,
            image,
            content, // Array of content objects
            creator: req.user.id,
        });

        await blog.save();
        res.json(blog);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Get a all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('creator', 'name');
        res.json(blogs);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


// Get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        // Extract blog ID from the URL parameters
        const blogId = req.params.id;

        // Find the blog by ID, populate the creator's name
        const blog = await Blog.findById(blogId).populate('creator', 'name');

        // If the blog doesn't exist, return a 404 error
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        // Return the blog in the response
        res.json(blog);
    } catch (error) {
        // If there's a server error, return a 500 status
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;

        // Find the blog by ID
        const blog = await Blog.findById(blogId);

        // If the blog doesn't exist, return a 404 error
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        // Check if the user is the creator of the blog or an admin
        if (blog.creator.toString() !== req.user.id && req.user.role !== '01') {
            return res.status(403).json({ msg: 'User not authorized' });
        }

        // Delete the blog
        await blog.deleteOne();

        res.json({ msg: 'Blog removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


// Update a blog by ID
exports.updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, category, image, content } = req.body;

        // Find the blog by ID
        const blog = await Blog.findById(blogId);

        // If the blog doesn't exist, return a 404 error
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        // Check if the user is the creator of the blog or an admin
        if (blog.creator.toString() !== req.user.id && req.user.role !== '01') {
            return res.status(403).json({ msg: 'User not authorized' });
        }

        // Update the blog fields
        if (title) blog.title = title;
        if (category) blog.category = category;
        if (image) blog.image = image;
        if (content) blog.content = content;

        await blog.save();
        res.json(blog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
