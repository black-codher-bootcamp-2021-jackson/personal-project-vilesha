const { query } = require("express");
const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");
const Contact = mongoose.model("contacts");
const { protect } = require("../middleware/auth");
const { get } = require("../models/Profile");

const privateRoutes = (app) => {
app.get(`/api/profile/private`), protect, (_, res) => {
    res.status(200).json({
        success: true,
        data: "You've got access to Profile private data",
    });
}
}

module.exports = privateRoutes;