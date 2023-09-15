const express = require("express");
const {
  getAllPlayer,
  addAPlayer,
  updateAPlayer,
  deleteAPlayer,
} = require("../controllers/player.controller");

const playerRouter = express.Router();

// get all players
playerRouter.get("/players", getAllPlayer);

// add a player
playerRouter.post("/players", addAPlayer);

// update a player
playerRouter.put("/players/:id", updateAPlayer);

// delete a player
playerRouter.delete("/players/:id", deleteAPlayer);

module.exports = playerRouter;
