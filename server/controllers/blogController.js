const Blog = require('../models/Blog');

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


exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('creator', 'name');
        res.json(blogs);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
