const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));


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

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let {statusCode = 500, message = "Something went wrong!"} = err;
  res.status(statusCode).render("./listings/error.ejs", {message});
});

app.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
