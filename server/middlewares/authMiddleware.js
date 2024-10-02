const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Add the user from the payload to the req object

        // Continue to the next middleware or route handler
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
