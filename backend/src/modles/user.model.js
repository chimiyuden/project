// user model
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  gender: String,
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
