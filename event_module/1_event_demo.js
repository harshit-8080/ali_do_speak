const events = require("events");

const myEvent = new events();

myEvent.on("msg1", (data) => {
  console.log(data);
});

myEvent.emit("msg1", "This is a message 1");
myEvent.emit("msg1", "This is a message 2");
myEvent.emit("msg1", "This is a message 3");
