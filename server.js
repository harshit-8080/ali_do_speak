const express = require("express");
const app = express();

////////////////////////////////
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
////////////////////////////////

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  //TODO remove this setInterval
  // setInterval(() => {
  //   socket.emit("fromServer");
  // }, 2000);

  // socket.on("fromClient", () => {
  //   console.log("messgae received from client");
  // });

  /// something meaningful
  socket.on("msg_send", (msg) => {
    console.log(msg);
    io.emit("msg_rcvd", msg);
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
