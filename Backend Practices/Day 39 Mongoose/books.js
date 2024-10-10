const { type } = require("express/lib/response");
const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 25,
    required: true,
  },
  author: {
    type: String,
  },
  category: {
    enum: ["fiction", "non-fiction"],
  },
  price: {
    type: Number,
    min: [1, "Price is too Low, Minimum Allowed Price is Rs 1.00"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  genere: {
    type: [String],
  },
});

const Book = new mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Kamyabi ka pehla din",
//   author: "Ibrahim Bhatti",
//   category: "fiction",
//   price: 2599,
//   genere: ["success", "motivation", "better life"],
// });

// book1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Book.insertMany([
//     {
//         title: "The Atomic Habits",
//         author: "RD Peepa",
//         price: 1500
//     },
//     {
//         title: "Aik tha Jasooos",
//         author: "Kabul Khilari",
//         price: 2500
//     },
//     {
//         title: "The Diary of CEO",
//         author: "Chheeda Kabariya",
//         price: 3500
//     }
// ])
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

// Book.find({})
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

Book.findByIdAndUpdate(
  "670774af7890319f8e460697",
  { price: -600 },
  { runValidators: true, new: true }
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.errors.price.properties.message));
