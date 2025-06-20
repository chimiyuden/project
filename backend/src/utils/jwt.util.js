const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../configs");

const createJWTToken = (data) => {
  return jwt.sign(data, jwtSecret);
};

const verifyJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (err) {
    console.log(err);
    return { error: err, message: err.message };
  }
};

module.exports = { createJWTToken, verifyJWTToken };
