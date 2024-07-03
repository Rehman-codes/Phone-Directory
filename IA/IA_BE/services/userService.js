const User = require('../models/user');

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = { getAllUsers, createUser };
