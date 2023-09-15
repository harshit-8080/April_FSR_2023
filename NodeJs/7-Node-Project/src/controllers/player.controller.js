const players = require("../models/player.model");
const { addAPlayerService } = require("../services/player.service");

function getAllPlayer(req, res) {
  return res.json({ response: players });
}

function addAPlayer(req, res) {
  const player = req.body;
  addAPlayerService(player);

  return res.json({ message: "Added a New Player" });
}

function getAPlayerByID(req, res) {
  return res.json({ message: "A Player is returned" });
}

function updateAPlayer(req, res) {
  return res.json({ message: "Updated A Player successfully" });
}

function deleteAPlayer(req, res) {
  return res.json({ message: "Deleted A Player successfully" });
}

module.exports = {
  getAllPlayer,
  getAPlayerByID,
  addAPlayer,
  updateAPlayer,
  deleteAPlayer,
};
