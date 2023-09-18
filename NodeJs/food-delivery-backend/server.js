const express = require("express");
const dbConnection = require("./src/config/db.config");
const UserRouter = require("./src/routes/user.route");

const app = express();
app.use(express.json());
app.use(UserRouter);

app.listen(3000, async () => {
  console.log("server listening on port 3000");
  await dbConnection();
});
