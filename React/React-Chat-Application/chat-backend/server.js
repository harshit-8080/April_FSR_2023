const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New User Connected");

  socket.on("message", (message) => {
    console.log(message);

    io.emit("message", message);
  });
});

server.listen(4000, () => {
  console.log("Server started listening on 4000");
});
