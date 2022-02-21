const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token - req.header.authorization.split(" ")[1]
    }

    if (!token) {
        res.status(401).json({ success: false, error: "Not authorized to access this route" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const profile = await Profile.findById(decoded.id);

        if (!profile) {
            res.status(404).json({ success: false, error: "No user found with this id" });
        }

        reqq.profile = profile;

        next();
    } catch (error) {
        res.status(401).json({ success: false, error: "Not authorised to access this route" })
    }
};