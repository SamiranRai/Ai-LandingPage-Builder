const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email id."];
  },
  photo: String,
  provider: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// MODEL
const User = mongoose.model("User", userSchema);
module.exports = User;
