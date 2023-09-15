const players = require("../models/player.model");

const addAPlayerService = (player) => {
  players.push(player);
  return;
};

const updateAPlayerService = () => {};

const deleteAPlayerService = () => {};

module.exports = {
  addAPlayerService,
  updateAPlayerService,
  deleteAPlayerService,
};
