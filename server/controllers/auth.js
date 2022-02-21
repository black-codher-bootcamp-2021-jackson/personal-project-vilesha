const { append } = require('express/lib/response');
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { post } = require('../models/Contact');
const Profile = require('../models/Profile');
const router = require('../routes/auth');
const bcrypt = require('bcrypt');

// REGISTERING PROFILE
exports.register = (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const profile = Profile.create({
            first_name,
            last_name,
            email,
            password,
        });

        sendToken(profile, 201, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            // error: error.message,
            error: "Invalid email",

        });
    }
};

// LOGGING IN

// exports.login = (req, res, next) => {
//     res.send("Login Route");
// };

// exports.login = async (req, next) => {
//     const { email, password } = req.body;
// // console.log(email);
//     if (!email || !password) {
//         res.status(400).json({ success: false, error: "Please provide email and password" })
//     }

//     try {
//         const profile = await Profile.findOne({ email }).select("+password");
// // console.log(profile);
//         if (!profile) {
//             res.status(404).json({ success: false, error: "Invalid" })
//         }
// // // COMMENT OUT LINE 50 - 54
//         // const isMatch = profile.matchPasswords(password);

//         // if (!isMatch) {
//         //     res.status(404).json({ success: false, error: "Invalid" })
//         // }

//         sendToken(profile, 201, res);

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }


// };

exports.login = async (req, res) => {

    const profileLoggingIn = req.body;

    console.log(profileLoggingIn.password);

    Profile.findOne({ email: profileLoggingIn.email }).select("+password")
        .then(dbprofiles => {
            console.log(dbprofiles);
            if (!dbprofiles) {
                return res.json({
                    messgae: "Invalid Username or Password"
                })
            }
            bcrypt.compare(profileLoggingIn.password, dbprofiles.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        const payload = {
                            id: dbprofiles._id,
                            email: dbprofiles.email,
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            {expiresIn: 86400},
                            (err, token) => {
                                console.log("hi");
                                if (err) return res.json({ message: err })
                                return res.json({ message: "Log in successful", token: token })
                                // sendToken(Profile, 200, res);
                            }
                        )
                    } else {
                        console.log("is it me your looking for");
                        return res.json ({message: "Invalid Username"})
                    }
                })
        })

};


exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route");
};

const sendToken = (profile, statusCode, res) => {
    const token = Profile.getSignedToken();
    res.status(statusCode).json({ success: true, token })
};