const express = require("express");
const axios = require("axios");

const app = express();

// Set EJS AS THE TEMPLATE ENGINE
app.set("view engine", "ejs");

app.get("/posts", async (req, res) => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(url);
  const data = response.data.slice(0, 5);

  console.log(data);

  res.render("post", { data });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
