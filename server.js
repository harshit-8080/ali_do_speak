const express = require("express");
const app = express();
const ejs = require("ejs");
////////////////////////////////
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const db_connect = require("./config/database-config");
const io = new Server(server);
////////////////////////////////

const Chat = require("./model/chat-model");

app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/chat/:roomId", async (req, res) => {
  ////////////////////////////////
  const chats = await Chat.find({ roomId: req.params.roomId });
  ////////////////////////////////
  res.render("index", {
    name: "Harshit",
    roomId: req.params.roomId,
    chats: chats,
  });
});

io.on("connection", (socket) => {
  //! joining room here
  socket.on("join_room", (data) => {
    socket.join(data.roomid);
  });

  socket.on("msgSent", async (data) => {
    //! Saving You Message to Database
    await Chat.create({
      content: data.msg,
      user: data.userName,
      roomId: data.roomid,
    });

    //! passing msgs to correct room only.
    io.to(data.roomid).emit("msg_rcvd", {
      msg: data.msg,
      userName: data.userName,
    });
  });
});

server.listen(3000, async () => {
  console.log("server listening on port 3000");
  await db_connect();
});
