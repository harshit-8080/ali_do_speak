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

  setInterval(() => {
    socket.emit("fromServer");
  }, 2000);

  socket.on("fromClient", () => {
    console.log("messgae received from client");
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
