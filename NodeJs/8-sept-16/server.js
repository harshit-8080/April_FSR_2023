const express = require("express");
const studentRouter = require("./routes/student.route");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(studentRouter);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
  console.log(process.env.name);
});
