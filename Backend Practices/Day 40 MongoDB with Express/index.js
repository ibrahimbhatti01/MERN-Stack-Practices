const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

function wrapAsync(fn){
  return function (req, res, next){
    fn(req, res, next).catch(err => next(err));
  };
};

// root
app.get("/", (req, res) => {
  res.send("working fine");
});

// index route
app.get("/chats", wrapAsync(async (req, res, next) => {
 let chats = await Chat.find();
  res.render("chats.ejs", { chats });
}));

// new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "page not found");
  res.render("new.ejs");
});

// create route
app.post("/chats", wrapAsync(async (req, res, next) => {
let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    message: message,
    to: to,
    createdAt: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
}));

// show route
app.get("/chats/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // if(!chat){
    //   // throw new ExpressError(404, "page not found"); //in async funcyion express can't call next() on it's own.
    //   next(new ExpressError(404, "page not found")); //So, we've to do in this type
    // }
    res.render("show.ejs", { chat });
}));

// edit route
app.get("/chats/:id/edit", wrapAsync(async (req, res, next) => {
      let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
}));

// update route
app.post("/chats/:id", wrapAsync(async (req, res, next) => {
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
}));

// delete route
app.delete("/chats/:id/delete", wrapAsync(async (req, res, next) => {
  let { id } = req.params;
  let deleted = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
}));

// Error handling middleware
app.use((err, req, res, next) => {
  let {status=500, message} = err;
  res.status(status).send(message);
})

app.listen("8080", () => {
  console.log("server is listening on 8080");
});
