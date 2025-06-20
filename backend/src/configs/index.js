const dotenv = require("dotenv");

dotenv.config();
console.log("tenzen ", process.env.JWT_SECRET);

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
};
