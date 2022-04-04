const User = require("../models/user");

const userConnected = async (uid) => {
  const user = await User.findOne({ _id: uid });
  console.log("user is: ", user);
  user.online = true;
  await user.save();
  return user;
};

const userDisconnected = async (uid) => {
  const user = await User.findOne({ _id: uid });
  user.online = false;
  await user.save();
  return user;
};

const getUsers = async () => {
  const users = await User.find().sort("-online");

  return users;
};

module.exports = {
  userConnected,
  userDisconnected,
  getUsers,
};
