const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function placeOrder(food) {
  myEmitter.emit("order", food);
  myEmitter.emit("doorbell");
  myEmitter.emit("payment", food);
  myEmitter.emit("delivery", food);
}

myEmitter.on("order", (food) => {
  console.log("Order placed for", food);
});

myEmitter.on("doorbell", () => {
  console.log("RING RING!");
});

myEmitter.on("payment", (food) => {
  console.log("Payement completed your ->", food);
});

myEmitter.on("delivery", (food) => {
  console.log("Delivery Completed --> Enjoy your -->", food);
});

placeOrder("burger");
