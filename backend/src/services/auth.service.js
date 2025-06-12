const { createJWTToken } = require("../utils/jwt.util");
const { createHash, compareHash } = require("../utils/hash.util");
const User = require("../modles/user.model");
const RevokedToken = require("../modles/revokedToken");

const signIn = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email: email });

  if (!user) {
    return { userNotFound: true };
  }

  const isMatched = await compareHash(password, user.password);

  if (!isMatched) {
    return { passwordMismatch: true };
  }

  delete user.password;

  const token = createJWTToken(user.toJSON());

  return { token };
};

const signUp = async (data) => {
  const { email } = data;
  const user = await User.findOne({ email: email });

  if (user) {
    return { userAlreayExists: true };
  }
  data.password = await createHash(data.password);

  const newUser = new User(data);
  const savedUser = await newUser.save();
  return { user: savedUser };
};

const signOut = async (token) => {
  const newToken = new RevokedToken({ token });
  await newToken.save();
};

module.exports = {
  signIn,
  signUp,
  signOut,
};
