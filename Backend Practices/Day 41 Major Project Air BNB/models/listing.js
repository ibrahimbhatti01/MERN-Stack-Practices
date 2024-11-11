const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: {
    type: String,
    default: "listingimage" // Set a default filename if needed
  },
  url: {
    type: String,
    default: "https://images.unsplash.com/photo-1670589953903-b4e2f17a70a9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) => (v === "" ? "https://images.unsplash.com/photo-1670589953903-b4e2f17a70a9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v)
  }
});

const listingSchema = new Schema({
  title: {
    type: String,
  },
  description: String,
  image: {
    _id: false,
    type: imageSchema, // Use the image schema as a type
    default: () => ({}) // Provide a default empty object
  },
  price: Number,
  location: String,
  country: String,
  review: [
    {
    type: Schema.Types.ObjectId,
    ref: "Review"
  }]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
