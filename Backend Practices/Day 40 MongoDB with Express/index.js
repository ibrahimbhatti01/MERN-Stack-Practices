const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
  res.send("working finely");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    message: message,
    to: to,
    createdAt: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("New message send !");
    })
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.post("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMessage } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {
      message: newMessage,
    },
    {
      runValidators: true,
      new: true,
    }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

app.delete("/chats/:id/delete", async (req, res) => {
  let { id } = req.params;
  let deleted = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen("8080", () => {
  console.log("server is listening on 8080");
});
