async function getUserData(userId) {
  if (userId == 101) {
    return { id: 101, name: "John" };
  } else if (userId == 102) {
    return { id: 102, name: "Suraj" };
  } else {
    return { id: 103, name: "Sachin" };
  }
}

module.exports = {
  getUserData,
};
