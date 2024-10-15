const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then((res) => console.log("Connection Successful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("I'm your root, Baby !!");
});

// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", {allListings});
});

// Show Route
app.get("/show/:id", async (req, res) => {
  let {id} = req.params;
  let listing = await Listing.findById(id);
  res.render("./listings/show.ejs", {listing});
});

app.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
