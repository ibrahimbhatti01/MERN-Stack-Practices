const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
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

const validateListing = (req, res, next) => {
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  };
};

const validateReview = (req, res, next) => {
  let {error} = reviewSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }else{
    next();
  };
};

// Index Route
app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
}));

// New Route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// Create Route
app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
  // let {title, description, image, price, country, location} = req.body;
const newListing = new Listing(req.body.listing);
await newListing.save();
res.redirect("/listings");
}));

// Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id).populate("review");
  res.render("./listings/show.ejs", { listing });
}));

//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    // For third party errors, Hoppscotch
  if(!req.body.listing){
    throw new ExpressError(400, "Bad Request");
  };
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  console.log(req.body.listing);
  res.redirect(`/show/${id}`);
}));

//Delete Route
app.delete("/listings/:id/delete", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));

// Reviews Route
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);

  let newReview = new Review(req.body.review);

  listing.review.push(newReview);

  await newReview.save();
  await listing.save();

  res.redirect(`/listings/${listing._id}`);
}))

// Delete Review Route
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
  let {id, reviewId} = req.params;

  await Listing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listings/${id}`);;
}))

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
