var socket = io();

//TODO: remove all this code

// socket.on("fromServer", () => {
//   const div = document.createElement("div");
//   div.innerText = "New Event from server";
//   document.body.appendChild(div);
// });

// // sending event from client to server
// const btn = document.getElementById("btn");
// btn.onclick = function clickMe() {
//   socket.emit("fromClient");
// };

//TODO: remove all this code

/// Start here for something better

let btn = document.getElementById("btn");
let inputmsg = document.getElementById("newmsg");
let msglist = document.getElementById("msglist");

btn.onclick = function exec() {
  socket.emit("msg_send", {
    msg: inputmsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let limsg = document.createElement("li");

  limsg.innerText = data.msg;

  msglist.appendChild(limsg);
});
