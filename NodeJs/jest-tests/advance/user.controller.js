const { getUserData } = require("./user.service");

async function getUserInfo(userId) {
  const userData = await getUserData(userId);

  return { id: userData.id, name: userData.name };
}

module.exports = {
  getUserInfo,
};
