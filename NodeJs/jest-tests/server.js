const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Suraj" },
  { id: 2, name: "Chandan" },
  { id: 3, name: "Abhi" },
  { id: 4, name: "Harshit" },
];

app.get("/api/greet", (req, res) => {
  res.status(200).json({ message: "Good Morning" });
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => {
    if (user.id == userId) {
      return user;
    }
  });

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ error: "user not found" });
  }
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

module.exports = app;
