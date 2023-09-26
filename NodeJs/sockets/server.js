const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.get("/chat/:roomId", async (req, res) => {
  const chats = await Chat.find({ roomId: req.params.roomId });

  // console.log(chats);

  res.render("index", { roomId: req.params.roomId, chats: chats });
});

const { Server } = require("socket.io"); // SOCKET SERVER
const db_connection = require("./config/db.config");
const Chat = require("./models/chat.model");
const io = new Server(server);

io.on("connection", (socket) => {
  //! JOINING ROOM PERMITED
  socket.on("join_room", (data) => {
    socket.join(data.roomId);
  });

  socket.on("msgSent", async (data) => {
    //! Saving your message to database
    const chat = {
      message: data.msg,
      user: data.userName,
      roomId: data.roomId,
    };
    await Chat.create(chat);

    //! passing msgs to correct room only
    io.to(data.roomId).emit("msg_rcvd", {
      msg: data.msg,
      userName: data.userName,
    });
  });
});

server.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_connection();
});
