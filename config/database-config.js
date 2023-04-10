const mongoose = require("mongoose");

const db_connect = async () => {
  await mongoose.connect(
    "mongodb+srv://harshitbackendcloud:cST2aIPpd4j7Bv6X@cluster0.cobouaw.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("database connection established");
};

module.exports = db_connect;
