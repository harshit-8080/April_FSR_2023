const express = require("express");
const dbConnection = require("./src/config/db.config");
const UserRouter = require("./src/routes/user.route");
const RestaurantRouter = require("./src/routes/restaurant.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(UserRouter);
app.use(RestaurantRouter);

app.listen(process.env.PORT, async () => {
  console.log("server listening on port 3000");
  await dbConnection();
});
