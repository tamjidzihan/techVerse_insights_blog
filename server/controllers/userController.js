const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        // Check if the logged-in user is an admin
        if (req.user.role !== '01') {
            return res.status(403).json({ msg: 'Access denied. Admins only.' });
        }

        // Find all users in the database
        const users = await User.find().select('-password'); // Exclude the password from the result
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};