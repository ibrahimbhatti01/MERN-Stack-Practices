const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("working finely");
});

app.listen("8080", () => {
  console.log("server is listening on 8080");
});
