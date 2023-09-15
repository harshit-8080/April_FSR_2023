const express = require("express");
const playerRouter = require("./src/routes/player.route");

const app = express();
app.use(express.json());

app.use(playerRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
