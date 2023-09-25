const { Socket } = require("dgram");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

const { Server } = require("socket.io"); // SOCKET SERVER
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("msgSent", (data) => {
    io.emit("msg_rcvd", {
      msg: data.msg,
      userName: data.userName,
    });
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
