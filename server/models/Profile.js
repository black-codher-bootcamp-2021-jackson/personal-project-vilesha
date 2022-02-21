const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const contact = require("./Contact")

const profileSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "please provide your first name"]
  },
  last_name: {
    type: String,
    required: [true, "please provide your last name"]
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please add a password"],
    select: false
  },
  resetPasswordToken: String,
  dob: Date,
  contacts: [contact],
});

profileSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

profileSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
}

profileSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
expiresIn:process.env.JWT_EXPIRE,
  });
};

const Profile = mongoose.model("Profile", profileSchema);

mongoose.model("profiles", profileSchema);

module.exports = Profile;