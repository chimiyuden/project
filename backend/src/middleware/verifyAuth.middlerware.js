const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = verifyToken;
