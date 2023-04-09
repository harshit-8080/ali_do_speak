var socket = io();

socket.on("fromServer", () => {
  const div = document.createElement("div");
  div.innerText = "New Event from server";
  document.body.appendChild(div);
});

// sending event from client to server
const btn = document.getElementById("btn");
btn.onclick = function clickMe() {
  socket.emit("fromClient");
};
